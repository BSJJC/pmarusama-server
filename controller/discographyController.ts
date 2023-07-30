import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import DiscographyModel from "../model/discography";

/**
 * @description            Create new discography info
 * @route                       POST /api/disgraphy/create
 * @access                    Public
 */
export const createDiscography = asyncHandler(async (req: Request, res: Response) => {
  try {
    const {
      releaseDate,
      name,
      coverObjectIDs,
      stprLink,
      songs,
    } = req.body;

    const topicInfo = await DiscographyModel.create({
      releaseDate,
      name,
      coverObjectIDs,
      stprLink,
      songs,
    });

    res.status(200).json(topicInfo);
  } catch (error) {
    res.status(400).send("error when create new discography");
    throw new Error("error when create new discography");
  }
});

/**
 * @description                     Get discography
 * @route                                 GET /api/disgraphy/get
 * @access                              Public
 */
export const getDiscography = asyncHandler(async (req: Request, res: Response) => {
  // const topics = await DiscographyModel.find().sort({ _id: 1 }).limit(20);

  res.status(200).send("OK");
});