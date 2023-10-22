import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import SocialMediaModel from '../../model/socialMedia/socialMedia';

/**
 * @description                 Create new social media
 * @route                       POST /api/socialMedia/create
 * @access                      Public
 */
export const createSocialMedia = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { name, imgID, url } = req.body;

    if (!name) {
      res.status(400).send('No file name');
      return;
    }

    if (!imgID) {
      res.status(400).send('No file obejct id');
      return;
    }

    const SocialMedia = await SocialMediaModel.create({
      name,
      imgID,
      url,
    });

    res.status(200).json(SocialMedia);
  } catch (error) {
    res.status(400).send('error when create new social media');
    throw new Error('error when create new social media');
  }
});

/**
 * @description                 Get social media
 * @route                       GET /api/socialMedia/get
 * @access                      Public
 */
export const getSocialMedia = asyncHandler(async (req: Request, res: Response) => {
  const socialMedias = await SocialMediaModel.find();

  res.status(200).json({ socialMedias });
});
