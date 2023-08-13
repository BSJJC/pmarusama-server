import { Router } from "express";

import {
  createSocialMedia,
  getSocialMedia
}
  from "../../controller/socialMedia/socialMediaController"

const socialMediaRouter = Router()

socialMediaRouter.post("/create", createSocialMedia);
socialMediaRouter.get("/get", getSocialMedia);

export default socialMediaRouter;