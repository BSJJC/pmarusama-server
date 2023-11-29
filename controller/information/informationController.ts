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
 * @description                 Get informations list, but only date, title and informationType of each information
 * @route                       GET /api/informationList/get
 * @access                      Public
 */
export const getInformationList = asyncHandler(async (req: Request, res: Response) => {
  const page: number = req.body.page;

  const informations = await informationModel
    .find()
    .sort({ date: -1 })
    .skip(10 * page)
    .limit(10)
    .select('date title informationType');

  res.status(200).json({ informations });
});

export const getInformationDetail = asyncHandler(async (req: Request, res: Response) => {
  const { date } = req.params;

  const data = await informationModel.findOne({ date }).select('data');

  res.status(200).json(data);
});
