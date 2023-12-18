import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import InformationShopImageModel from '../../model/information/informationShopImage';

/**
 * @description                 Create new information shop image
 * @route                       POST /api/informationShopImg/create
 * @access                      Public
 */
export const createInformationShopImage = asyncHandler(async (req: Request, res: Response) => {
  try {
    const file = req?.file;

    if (!file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const imageBuffer = req.file!.buffer;
    const shopName = req.body.imageID;

    const InformationImage = await InformationShopImageModel.create({
      shopName,
      imageBuffer,
    });

    res.status(200).json(InformationImage);
  } catch (error) {
    res.status(400).send('error when create new information shop image');
    throw new Error('error when create new information shop image');
  }
});

/**
 * @description                 Get information shop image
 * @route                       GET /api/informationShopImg/:imageID
 * @access                      Public
 */
export const getInformationShopImage = asyncHandler(async (req: Request, res: Response) => {
  const shopName = req.params.shopName;

  const data = await InformationShopImageModel.findOne({
    shopName,
  });

  if (!data) {
    res.status(404).send('No information shop image found');
    return;
  }

  res.status(200).send(data.imageBuffer);
});
