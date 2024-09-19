import express from 'express';
import bodyParser from 'body-parser';
import { userController } from '../user/controller';


const userRouter = express.Router()
userRouter.use(bodyParser.json())
userRouter.use(bodyParser.urlencoded({
    extended: true
}))

userRouter.get('/user', userController.showUsers); 
userRouter.delete('/user/:id', userController.deleteUser);
userRouter.post('/user/add', userController.addUser);
userRouter.put('/user/:id', userController.modifyUser);

export default userRouter;