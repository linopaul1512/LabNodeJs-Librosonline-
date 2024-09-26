import bodyParser from 'body-parser';
import express from 'express';
import { authenticateToken } from '../validations/authMiddleware.js';
import {intertypeController} from '../intertypes/controller.js'



const intertypeRouter = express.Router()
intertypeRouter.use(bodyParser.json())
intertypeRouter.use(bodyParser.urlencoded({
    extended: true
}))

intertypeRouter.get('/intertype', authenticateToken,  intertypeController.showIntertypes); 
intertypeRouter.post('/intertype/add',authenticateToken, intertypeController.addIntertype);
intertypeRouter.put('/intertype/:id', authenticateToken, intertypeController.modifyIntertype);
intertypeRouter.get('/intertype/:id', authenticateToken, intertypeController.filterIntertype); 
intertypeRouter.delete('/intertype/:id', authenticateToken, intertypeController.deleteIntertype);

export default intertypeRouter;