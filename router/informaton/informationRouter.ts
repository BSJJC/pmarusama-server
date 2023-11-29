import { Router } from 'express';

import {
  createInformation,
  getInformationList,
  getInformationDetail,
} from '../../controller/information/informationController';

const informationRouter = Router();

informationRouter.post('/create', createInformation);
informationRouter.get('/getInformationList', getInformationList);
informationRouter.get('/getInformationDetail/:date', getInformationDetail);

export default informationRouter;
