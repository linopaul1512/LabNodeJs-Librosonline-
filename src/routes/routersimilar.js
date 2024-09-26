import express from 'express';
import bodyParser from 'body-parser';
import { similarController } from '../similiarproducts/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';


const similarRouter = express.Router()
similarRouter.use(bodyParser.json())
similarRouter.use(bodyParser.urlencoded({
    extended: true
}))

similarRouter.get('/similar', authenticateToken, similarController.showSim); 
similarRouter.get('/similar/:id', authenticateToken, similarController.filterSim); 
similarRouter.delete('/similar/:id', authenticateToken, similarController.deleteSim);
similarRouter.post('/similar/add', authenticateToken, similarController.addSim);
similarRouter.put('/similar/:id', authenticateToken, similarController.modifySim);

export default similarRouter;