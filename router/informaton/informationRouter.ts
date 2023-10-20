import { Router } from 'express';

import { createInformation, getInformation } from '../../controller/information/informationController';

const informationRouter = Router();

informationRouter.post('/create', createInformation);
informationRouter.get('/get', getInformation);

export default informationRouter;
