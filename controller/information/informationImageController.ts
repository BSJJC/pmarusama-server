import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import InformationImageModel from '../../model/information/informationImage';

/**
 * @description                 Create new information image
 * @route                       POST /api/informationImg/create
 * @access                      Public
 */
export const createInformationImage = asyncHandler(async (req: Request, res: Response) => {
  try {
    const file = req?.file;

    if (!file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const imageBuffer = req.file!.buffer;
    const imageID = req.body.imageID;

    const InformationImage = await InformationImageModel.create({
      imageID,
      imageBuffer,
    });

    res.status(200).json(InformationImage);
  } catch (error) {
    res.status(400).send('error when create new information image');
    throw new Error('error when create new information image');
  }
});

/**
 * @description                 Get information image
 * @route                       GET /api/informationImg/get/:imageID
 * @access                      Public
 */
export const getInformationImage = asyncHandler(async (req: Request, res: Response) => {
  const imageID = req.params.imageID;

  const data = await InformationImageModel.findOne({
    imageID,
  });

  if (!data) {
    res.status(404).send('No information image found');
    return;
  }

  res.status(200).send(data.imageBuffer);
});
