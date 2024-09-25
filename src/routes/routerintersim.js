import express from 'express';
import bodyParser from 'body-parser';
import { intersimController } from '../intersimilar/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';


const intersimRouter = express.Router()
intersimRouter.use(bodyParser.json())
intersimRouter.use(bodyParser.urlencoded({
    extended: true
}))

intersimRouter.get('/intersim/:id',authenticateToken, intersimController.filterIntersim); 
intersimRouter.get('/intersim', authenticateToken,  intersimController.showIntersim); 
intersimRouter.delete('/intersim/:id', authenticateToken, intersimController.deleteIntersim);
intersimRouter.post('/intersim/add', authenticateToken, intersimController.addIntersimt);
intersimRouter.put('/intersim/:id', authenticateToken, intersimController.modifyIntersim);

export default intersimRouter;