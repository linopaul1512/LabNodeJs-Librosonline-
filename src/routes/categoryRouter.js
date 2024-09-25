import { categoryController } from '../category/controller.js';
import bodyParser from 'body-parser';
import express from 'express';
import { authenticateToken } from '../validations/authMiddleware.js';


const categoryRouter = express.Router()
categoryRouter.use(bodyParser.json())
categoryRouter.use(bodyParser.urlencoded({
    extended: true
}))

//Category routes
categoryRouter.get('/categories', authenticateToken, categoryController.showCategories); 
categoryRouter.get('/category/filter/:name', authenticateToken, categoryController.filterCategory); 
categoryRouter.post('/category/add', authenticateToken, categoryController.addCategory);
categoryRouter.put('/category/:id', authenticateToken, categoryController.modifyCategory);
categoryRouter.delete('/category/:id', authenticateToken, categoryController.deleteCategory);

export default categoryRouter;