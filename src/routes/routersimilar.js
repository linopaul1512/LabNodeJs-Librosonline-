import express from 'express';
import bodyParser from 'body-parser';
import { similarController } from '../similiarproducts/controller.js';


const similarRouter = express.Router()
similarRouter.use(bodyParser.json())
similarRouter.use(bodyParser.urlencoded({
    extended: true
}))

similarRouter.get('/similar/:id', similarController.filterSim); 
similarRouter.delete('/similar/:id', similarController.deleteSim);
similarRouter.post('/similar/add', similarController.addSim);
similarRouter.put('/similar/:id', similarController.modifySim);

export default similarRouter;