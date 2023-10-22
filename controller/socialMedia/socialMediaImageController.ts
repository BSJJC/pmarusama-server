import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import SocialMediaImageModel from '../../model/socialMedia/socialMediaImage';
import { ObjectId } from 'mongodb';

/**
 * @description                 Create new social media image
 * @route                       POST /api/socialMediaImg/create
 * @access                      Public
 */
export const createSocialMediaImage = asyncHandler(async (req: Request, res: Response) => {
  try {
    const file = req?.file;

    if (!file) {
      res.status(400).send('No file uploaded');
      return;
    }

    const imageBuffer = req.file!.buffer;

    const SocialMediaImage = await SocialMediaImageModel.create({
      imageBuffer,
    });

    res.status(200).json(SocialMediaImage);
  } catch (error) {
    res.status(400).send('error when create new social media image');
    throw new Error('error when create new social media image');
  }
});

/**
 * @description                 Get social media image
 * @route                       GET /api/socialMediaImg/get
 * @access                      Public
 */
export const getSocialMediaImage = asyncHandler(async (req: Request, res: Response) => {
  const objectId = req.params.objectId;

  const data = await SocialMediaImageModel.findOne({
    _id: new ObjectId(objectId),
  });

  if (!data) {
    res.status(404).send('No social media image found');
    return;
  }

  res.status(200).send(data.imageBuffer);
});
