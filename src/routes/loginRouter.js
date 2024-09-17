import express from 'express';
import { userController } from '../user/controller.js';

const loginRouter = express.Router();

loginRouter.post('/login', userController.login);

export default loginRouter;