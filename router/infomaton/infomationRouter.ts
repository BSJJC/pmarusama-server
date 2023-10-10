import { Router } from 'express';

import { createInfomation, getInfomation } from '../../controller/infomation/infomationController';

const infomationRouter = Router();

infomationRouter.post('/create', createInfomation);
infomationRouter.get('/get', getInfomation);

export default infomationRouter;
