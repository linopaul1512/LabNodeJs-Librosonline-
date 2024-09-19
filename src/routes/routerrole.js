import bodyParser from 'body-parser';
import express from 'express';
import { roleController } from '../role/controller.js';

const roleRouter = express.Router()
roleRouter.use(bodyParser.json())
roleRouter.use(bodyParser.urlencoded({
    extended: true
}))

roleRouter.get('/role', roleController.showRole); 
roleRouter.post('/role/add', roleController.addRole);
roleRouter.put('/role/:id', roleController.modifyRole);

export default roleRouter;