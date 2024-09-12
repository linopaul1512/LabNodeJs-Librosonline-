import bodyParser from 'body-parser';
import express from 'express';
import { authorController } from '../author/controller';


const authorRouter = express.Router()
authorRouter.use(bodyParser.json())
authorRouter.use(bodyParser.urlencoded({
    extended: true
}))

authorRouter.post('/author/add', authorController.addAuth);
authorRouter.put('/author/:id', authorController.modifyAuth);

export default authorRouter;