import { Router } from "express";
import multer from "multer";
import {
  createDiscographyCover,
} from "../controller/discographyCoverController";

const discographyCoverRouter = Router()
const upload = multer();

discographyCoverRouter.post(
  "/create",
  upload.single("discographyCover"),
  createDiscographyCover);

export default discographyCoverRouter;