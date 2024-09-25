import bodyParser from 'body-parser';
import express from 'express';
import { authorController } from '../author/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';


const authorRouter = express.Router()
authorRouter.use(bodyParser.json())
authorRouter.use(bodyParser.urlencoded({
    extended: true
}))
authorRouter.get('/author/:id',authenticateToken, authorController.filterAuth); 
authorRouter.get('/author', authenticateToken, authorController.showAuths); 
authorRouter.delete('/author/:id',authenticateToken, authorController.deleteAuth);
authorRouter.post('/author/add', authenticateToken, authorController.addAuth);
authorRouter.put('/author/:id', authenticateToken, authorController.modifyAuth);


export default authorRouter;