import bodyParser from 'body-parser';
import express from 'express';
import { typeController } from '../Typebooks/controller';


const typeRouter = express.Router()
typeRouter.use(bodyParser.json())
typeRouter.use(bodyParser.urlencoded({
    extended: true
}))

typeRouter.post('/type/add', typeController.addType);
typeRouter.put('/type/:id', typeController.modifyType);

export default typeRouter;