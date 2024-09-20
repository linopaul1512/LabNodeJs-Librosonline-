import bodyParser from 'body-parser';
import express from 'express';
import { publicationController } from '../publication/controller.js';

const publicatinRouter = express.Router()
publicatinRouter.use(bodyParser.json())
publicatinRouter.use(bodyParser.urlencoded({
    extended: true
}))


publicatinRouter.post('/publication/add', publicationController.addPub);
publicatinRouter.put('/publication/:id', publicationController.modifyPub);
publicatinRouter.get('/publication/:id', publicationController.filterPub); 
publicatinRouter.delete('/publication/:id', publicationController.deletePub);

export default publicatinRouter;