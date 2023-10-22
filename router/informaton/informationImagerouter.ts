import { Router } from 'express';
import multer from 'multer';
import { createInformationImage, getInformationIamge } from '../../controller/information/informationImageController';

const informationImageRouter = Router();
const upload = multer();

informationImageRouter.post('/create', upload.single('informationImage'), createInformationImage);

informationImageRouter.get('/:objectId', getInformationIamge);

export default informationImageRouter;
