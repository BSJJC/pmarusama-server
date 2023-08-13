import { Router } from "express";
import multer from "multer";

import {
  createSocialMediaImg,
  getSocialMediaImg
}
  from "../../controller/socialMedia/socialMediaImgController"

const socialMediaImgRouter = Router()
const upload = multer()

socialMediaImgRouter.post(
  "/create",
  upload.single("socialMediaImg"),
  createSocialMediaImg
);

socialMediaImgRouter.get(
  "/:objectId",
  getSocialMediaImg
);

export default socialMediaImgRouter;