import bodyParser from 'body-parser';
import express from 'express';
import { consultController } from '../consults/controller.js';
import { validateConsultsFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const consultRouter = express.Router()
consultRouter.use(bodyParser.json())
consultRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Muestra todas las consultas
 *     tags: [Consult]
 *     responses:
 *       200:
 *         description: Lista de consultas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Consultas no encontrados
 */
consultRouter.get('/consults', authenticateToken, consultController.showCon);


/**
 * @swagger
 * /author/add:
 *   post:
 *     summary: Añade una nueva consulta
 *     tags: [Consult]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Content:
 *                 type: string
 *               UserID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Consulta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 consults:
 *                   type: object
 *       400:
 *         description: Error en la creación de la consulta
 */
consultRouter.post('/consult/add', authenticateToken, validateConsultsFields, consultController.addCon);


consultRouter.put('/consult/:id', authenticateToken, validateConsultsFields, consultController.modifyCon);
consultRouter.get('/consult/:id', authenticateToken, consultController.filterCon); 
consultRouter.delete('/consult/:id', authenticateToken, consultController.deleteCon);

export default consultRouter;