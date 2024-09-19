import bodyParser from 'body-parser';
import express from 'express';
import { consultController } from '../consults/controller';

const consultRouter = express.Router()
consultRouter.use(bodyParser.json())
consultRouter.use(bodyParser.urlencoded({
    extended: true
}))

consultRouter.get('/consult', consultController.showCon); 
consultRouter.post('/consult/add', consultController.addCon);
consultRouter.put('/consult/:id', consultController.modifyCon);
consultRouter.get('/consult/:id', consultController.filterCon); 
consultRouter.delete('/consult/:id', consultController.deleteCon);

export default consultRouter;