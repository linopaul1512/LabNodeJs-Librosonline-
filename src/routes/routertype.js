import express from 'express';
import bodyParser from 'body-parser';
import { typeController } from '../typebooks/controller.js';


const typeRouter = express.Router()
typeRouter.use(bodyParser.json())
typeRouter.use(bodyParser.urlencoded({
    extended: true
}))

typeRouter.get('/type', typeController.showType); 
typeRouter.get('/type/:id', typeController.filterType); 
typeRouter.delete('/type/:id', typeController.deleteType);
typeRouter.post('/type/add', typeController.addType);
typeRouter.put('/type/:id', typeController.modifyType);

export default typeRouter;