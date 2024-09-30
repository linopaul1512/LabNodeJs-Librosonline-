import bodyParser from 'body-parser';
import express from 'express';
import { consultController } from '../consults/controller.js';
import { validateConsultsFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const consultRouter = express.Router()
consultRouter.use(bodyParser.json())
consultRouter.use(bodyParser.urlencoded({
    extended: true
}))


consultRouter.post('/consult/add', authenticateToken, validateConsultsFields, consultController.addCon);
consultRouter.put('/consult/:id', authenticateToken, validateConsultsFields, consultController.modifyCon);
consultRouter.get('/consult/:id', authenticateToken, consultController.filterCon); 
consultRouter.delete('/consult/:id', authenticateToken, consultController.deleteCon);

export default consultRouter;