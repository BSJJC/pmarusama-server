import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import InfomationModel from '../../model/infomation/infomation';

/**
 * @description             Create new infomation
 * @route                   POST /api/infomation/create
 * @access                  Public
 */
export const createInfomation = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    const newInfomation = await InfomationModel.create({
      text,
    });

    res.status(200).json(newInfomation);
  } catch (error) {
    res.status(400).send('error when create new infomation');
    throw new Error('error when create new infomation');
  }
});

/**
 * @description             Get infomations
 * @route                   GET /api/infomation/get
 * @access                  Public
 */
export const getInfomation = asyncHandler(async (req: Request, res: Response) => {
  const infomations = await InfomationModel.find().limit(12).sort({ releaseDate: -1 });

  res.status(200).json({ infomations });
});
