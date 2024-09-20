import express from 'express';
import bodyParser from 'body-parser';
import { intersimController } from '../intersimilar/controller.js';

const intersimRouter = express.Router()
intersimRouter.use(bodyParser.json())
intersimRouter.use(bodyParser.urlencoded({
    extended: true
}))

intersimRouter.get('/intersim/:id', intersimController.filterIntersim); 
intersimRouter.delete('/intersim/:id', intersimController.deleteIntersim);
intersimRouter.post('/intersim/add', intersimController.addIntersimt);
intersimRouter.put('/intersim/:id', intersimController.modifyIntersim);

export default intersimRouter;