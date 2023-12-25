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
    const shopName = req.body.shopName;

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
 * @route                       GET /api/informationShopImg/:shopName
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

/**
 * @description                 Get all information shop images
 * @route                       GET /api/informationShopImg/getAll
 * @access                      Public
 */
export const getAllInformationShopImages = asyncHandler(async (req: Request, res: Response) => {
  const data = await InformationShopImageModel.find().select('shopName  ');

  if (!data) {
    res.status(404).send('No information images found');
    return;
  }

  res.status(200).send(data);
});

/**
 * @description                 Delete information shop images
 * @route                       DELETE /api/informationShopImg/delete/:shopName
 * @access                      Public
 */
export const delteInformationShopImage = asyncHandler(async (req: Request, res: Response) => {
  const shopName = req.params.shopName;

  await InformationShopImageModel.deleteOne({ shopName });

  res.status(200).send('shop image deleted');
});
