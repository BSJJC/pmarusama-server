import { Router } from 'express';
import multer from 'multer';

import { createInformationImage, getInformationImage } from './../../controller/information/informationImageController';

const informationImageRouter = Router();
const upload = multer();

informationImageRouter.post('/create', upload.single('informationImage'), createInformationImage);
informationImageRouter.get('/:imageID', getInformationImage);

export default informationImageRouter;
