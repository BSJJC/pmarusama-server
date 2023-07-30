import { Router } from "express";

import {
  createDiscographyCover,
} from "../controller/discographyCoverController";

const discographyCoverRouter = Router()

discographyCoverRouter.post("/create", createDiscographyCover);

export default discographyCoverRouter;