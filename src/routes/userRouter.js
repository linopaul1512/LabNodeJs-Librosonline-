import { userController } from '../user/controller.js';
import bodyParser from 'body-parser';
import express from 'express';

const userRouter = express.Router()
userRouter.use(bodyParser.json())
userRouter.use(bodyParser.urlencoded({
    extended: true
}))

//User routes
userRouter.get('/users', userController.showUsers); 
userRouter.get('/user/filter/:email', userController.filterEmail); 
userRouter.post('/user/add', userController.addUser);
userRouter.put('/user/:id', userController.modifyUser);
userRouter.delete('/user/:id', userController.deleteUser);

export default userRouter;