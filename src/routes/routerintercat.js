import bodyParser from 'body-parser';
import express from 'express';
import { intercatController } from '../intercategory/controller.js';

const intercatRouter = express.Router()
intercatRouter.use(bodyParser.json())
intercatRouter.use(bodyParser.urlencoded({
    extended: true
}))


intercatRouter.post('/intercat/add', intercatController.addIntercat);
intercatRouter.get('/intercat', intercatController.showIntercat); 
intercatRouter.put('/intercat/:id', intercatController.modifyIntercat);
intercatRouter.get('/intercat/:id', intercatController.filterIntercat); 
intercatRouter.delete('/intercat/:id', intercatController.deleteIntercat);

export default intercatRouter;