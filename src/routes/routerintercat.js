import bodyParser from 'body-parser';
import express from 'express';
import { authenticateToken } from '../validations/authMiddleware.js';
import {intercatController} from '../intercategory/controller.js'

const intercatRouter = express.Router()
intercatRouter.use(bodyParser.json())
intercatRouter.use(bodyParser.urlencoded({
    extended: true
}))


intercatRouter.post('/intercat/add', authenticateToken, intercatController.addIntercat);
intercatRouter.get('/intercat', authenticateToken, intercatController.showIntercat); 
intercatRouter.put('/intercat/:id', authenticateToken,intercatController.modifyIntercat);
intercatRouter.get('/intercat/:id',authenticateToken, intercatController.filterIntercat); 
intercatRouter.delete('/intercat/:id', authenticateToken, intercatController.deleteIntercat);

export default intercatRouter;