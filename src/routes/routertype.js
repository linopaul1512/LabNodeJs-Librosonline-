import express from 'express';
import bodyParser from 'body-parser';
import { typeController } from '../typebooks/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';


const typeRouter = express.Router()
typeRouter.use(bodyParser.json())
typeRouter.use(bodyParser.urlencoded({
    extended: true
}))

typeRouter.get('/type', authenticateToken, typeController.showType); 
typeRouter.get('/type/:id', authenticateToken, typeController.filterType); 
typeRouter.delete('/type/:id', authenticateToken, typeController.deleteType);
typeRouter.post('/type/add', authenticateToken, typeController.addType);
typeRouter.put('/type/:id', authenticateToken, typeController.modifyType);

export default typeRouter;