import { Router } from 'express';
import multer from 'multer';

import {
  createInformationShopImage,
  getInformationShopImage,
  getAllInformationShopImages,
} from './../../controller/information/informationShopImageController';

const informationImageRouter = Router();
const upload = multer();

informationImageRouter.post('/create', upload.single('informationShopImage'), createInformationShopImage);
informationImageRouter.get('/all', getAllInformationShopImages);
informationImageRouter.get('/:shopName', getInformationShopImage);

export default informationImageRouter;
