import { categoryController } from '../category/controller.js';
import bodyParser from 'body-parser';
import express from 'express';

const categoryRouter = express.Router()
categoryRouter.use(bodyParser.json())
categoryRouter.use(bodyParser.urlencoded({
    extended: true
}))

//Category routes
categoryRouter.get('/categories', categoryController.showCategories); 
categoryRouter.get('/category/filter/:name', categoryController.filterCategory); 
categoryRouter.post('/category/add', categoryController.addCategory);
categoryRouter.put('/category/:id', categoryController.modifyCategory);
categoryRouter.delete('/category/:id', categoryController.deleteCategory);

export default categoryRouter;