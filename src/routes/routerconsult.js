import bodyParser from 'body-parser';
import express from 'express';
import { consultController } from '../consults/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';

const consultRouter = express.Router()
consultRouter.use(bodyParser.json())
consultRouter.use(bodyParser.urlencoded({
    extended: true
}))

consultRouter.get('/consult', authenticateToken, consultController.showCon); 
consultRouter.post('/consult/add', authenticateToken, consultController.addCon);
consultRouter.put('/consult/:id', authenticateToken, consultController.modifyCon);
consultRouter.get('/consult/:id', authenticateToken, consultController.filterCon); 
consultRouter.delete('/consult/:id', authenticateToken, consultController.deleteCon);

export default consultRouter;