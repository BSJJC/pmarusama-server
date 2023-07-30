import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import DiscographyCoverModel from "../model/discographyCover";

/**
 * @description            Create new discography cover
 * @route                       POST /api/disgraphyInfo/create
 * @access                    Public
 */
export const createDiscographyCover = asyncHandler(async (req: Request, res: Response) => {
  try {
    const file = req?.file;

    if (!file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const imageBuffer = req.file!.buffer;

    const coverDocument = new DiscographyCoverModel({ coverData: imageBuffer });
    await coverDocument.save();

    res.status(200).json({ message: "Image uploaded and saved successfully!" });


  } catch (error) {
    res.status(400).send("error when create new discography cover");
    throw new Error("error when create new discography cover");
  }
});