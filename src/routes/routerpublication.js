import bodyParser from 'body-parser';
import express from 'express';
import { publicationController } from '../publication/controller.js';
import { authenticateToken } from '../validations/authMiddleware';


const publicatinRouter = express.Router()
publicatinRouter.use(bodyParser.json())
publicatinRouter.use(bodyParser.urlencoded({
    extended: true
}))

publicatinRouter.get('/publications', authenticateToken, publicationController.showPubs); 
publicatinRouter.post('/publication/add', authenticateToken, publicationController.addPub);
publicatinRouter.put('/publication/:id', authenticateToken, publicationController.modifyPub);
publicatinRouter.get('/publication/:id', authenticateToken, publicationController.filterPub); 
publicatinRouter.delete('/publication/:id', authenticateToken, publicationController.deletePub);

export default publicatinRouter;