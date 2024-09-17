import bodyParser from 'body-parser';
import express from 'express';
import { intertypeController } from '../intertypes/controller.js';

const intertypeRouter = express.Router()
intertypeRouter.use(bodyParser.json())
intertypeRouter.use(bodyParser.urlencoded({
    extended: true
}))


intertypeRouter.post('/intertype/add', intertypeController.addIntertype);
intertypeRouter.put('/intertype/:id', intertypeController.modifyIntertype);
intertypeRouter.get('/intertype/:id', intertypeController.filterIntertype); 
intertypeRouter.delete('/intertype/:id', intertypeController.deleteIntertype);

export default intertypeRouter;