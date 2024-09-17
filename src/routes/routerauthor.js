import bodyParser from 'body-parser';
import express from 'express';
import { authorController } from '../author/controller.js';


const authorRouter = express.Router()
authorRouter.use(bodyParser.json())
authorRouter.use(bodyParser.urlencoded({
    extended: true
}))
authorRouter.get('/author/:id', authorController.filterAuth); 
authorRouter.delete('/author/:id', authorController.deleteAuth);
authorRouter.post('/author/add', authorController.addAuth);
authorRouter.put('/author/:id', authorController.modifyAuth);

export default authorRouter;