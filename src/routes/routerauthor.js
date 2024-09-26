import express from 'express';
import bodyParser from 'body-parser';
import { authorController } from '../author/controller.js';
import { authenticateToken } from '../validations/authMiddleware.js';
import { validateAuthorFields } from '../validations/validateFields.js';

const authorRouter = express.Router();
authorRouter.use(bodyParser.json());
authorRouter.use(bodyParser.urlencoded({ extended: true }));

authorRouter.get('/author/:id', validateAuthorFields, authenticateToken, authorController.filterAuth); 
authorRouter.get('/author', validateAuthorFields, authenticateToken, authorController.showAuth); 
authorRouter.delete('/author/:id', validateAuthorFields, authenticateToken, authorController.deleteAuth);
authorRouter.post('/author/add', validateAuthorFields, authenticateToken, authorController.addAuth);
authorRouter.put('/author/:id', validateAuthorFields, authenticateToken, authorController.modifyAuth);

export default authorRouter;
