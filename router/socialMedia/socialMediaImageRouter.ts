import { Router } from 'express';
import multer from 'multer';

import { createSocialMediaImage, getSocialMediaImage } from '../../controller/socialMedia/socialMediaImageController';

const socialMediaImageRouter = Router();
const upload = multer();

socialMediaImageRouter.post('/create', upload.single('socialMediaImage'), createSocialMediaImage);

socialMediaImageRouter.get('/:objectId', getSocialMediaImage);

export default socialMediaImageRouter;
