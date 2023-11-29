import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import informationModel from '../../model/information/information';

/**
 * @description                 Create new information
 * @route                       POST /api/information/create
 * @access                      Public
 */
export const createInformation = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { date, title, informationType, data } = req.body;

    const newinformation = await informationModel.create({
      date,
      title,
      informationType,
      data,
    });

    res.status(200).json(newinformation);
  } catch (error) {
    res.status(400).send('error when create new information');
    throw new Error('error when create new information');
  }
});

/**
 * @description                 Get informations
 * @route                       GET /api/information/get
 * @access                      Public
 */
export const getInformation = asyncHandler(async (req: Request, res: Response) => {
  const informations = await informationModel.find().sort({ date: -1 });

  res.status(200).json({ informations });
});
