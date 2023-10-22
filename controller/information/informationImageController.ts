import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import InformationImageModel from '../../model/information/informationImage';
import { ObjectId } from 'mongodb';

/**
 * @description                 Create new information image
 * @route                       POST /api/informationImage/create
 * @access                      Public
 */
export const createInformationImage = asyncHandler(async (req: Request, res: Response) => {
  try {
    const file = req?.file;

    if (!file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const { name } = req.body;
    const imageBuffer = req.file!.buffer;

    const informationImage = await InformationImageModel.create({
      name,
      imageBuffer,
    });

    res.status(200).json({
      message: 'Information image uploaded and saved successfully!',
      informationImage,
    });
  } catch (error) {
    res.status(400).send('error when create new information image');
    throw new Error('error when create new information image');
  }
});

/**
 * @description                 Find and send information image
 * @route                       GET  /api/informationImage/:objectId
 * @access                      Public
 */
export const getInformationIamge = asyncHandler(async (req: Request, res: Response) => {
  const objectId = req.params.objectId;

  const data = await InformationImageModel.findOne({
    _id: new ObjectId(objectId),
  });

  if (!data) {
    res.status(404).send('No information image found');
    return;
  }

  res.status(200).send(data.imageBuffer);
});
