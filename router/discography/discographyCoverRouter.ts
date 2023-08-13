import { Router } from "express";
import multer from "multer";
import {
  createDiscographyCover,
  getDiscographyCover
} from "../../controller/discography/discographyCoverController";

const discographyCoverRouter = Router()
const upload = multer();

discographyCoverRouter.post(
  "/create",
  upload.single("discographyCover"),
  createDiscographyCover);

discographyCoverRouter.get(
  "/:objectId",
  getDiscographyCover
)

export default discographyCoverRouter;