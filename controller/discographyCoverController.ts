import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import DiscographyCoverModel from "../model/discographyCover";

/**
 * @description            Create new discography cover
 * @route                       POST /api/disgraphyInfo/create
 * @access                    Public
 */
export const createDiscographyCover = asyncHandler(async (req: Request, res: Response) => {
  try {
    const {
      name,
      base64string
    } = req.body;

    const discographyCover = await DiscographyCoverModel.create({
      name,
      base64string
    });

    res.status(200).json(discographyCover);
  } catch (error) {
    res.status(400).send("error when create new discography cover");
    throw new Error("error when create new discography cover");
  }
});