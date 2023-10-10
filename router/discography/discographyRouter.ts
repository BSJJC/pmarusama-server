import { Router } from 'express';

import { createDiscography, getDiscography } from '../../controller/discography/discographyController';

const discographyRouter = Router();

discographyRouter.post('/create', createDiscography);
discographyRouter.get('/get', getDiscography);

export default discographyRouter;
