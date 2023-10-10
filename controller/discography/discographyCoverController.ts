import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import DiscographyCoverModel from "../../model/discography/discographyCover";
import { ObjectId } from "mongodb";

/**
 * @description            Create new discography cover
 * @route                       POST /api/disgraphyInfo/create
 * @access                    Public
 */
export const createDiscographyCover = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const file = req?.file;

      if (!file) {
        res.status(400).send("No file uploaded");
        return;
      }

      const imageBuffer = req.file!.buffer;
      const coverDocument = new DiscographyCoverModel({
        coverData: imageBuffer,
      });
      await coverDocument.save();

      res
        .status(200)
        .json({
          message: "Discography cover uploaded and saved successfully!",
        });
    } catch (error) {
      res.status(400).send("error when create new discography cover");
      throw new Error("error when create new discography cover");
    }
  }
);

/**
 * @description         Find and send discography cover data
 * @route                     GET  /api/discography/:objectId
 * @access                 Public
 */
export const getDiscographyCover = asyncHandler(
  async (req: Request, res: Response) => {
    const objectId = req.params.objectId;

    const data = await DiscographyCoverModel.findOne({
      _id: new ObjectId(objectId),
    });

    if (!data) {
      res.status(404).send("No cover data found");
      return;
    }

    res.status(200).send(data.coverData);
  }
);
