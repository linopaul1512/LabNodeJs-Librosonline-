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
 * /consult/add:
 *   post:
 *     summary: Añadir una nueva consulta
 *     tags: [Consults]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               UserID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Consulta añadida exitosamente
 *       500:
 *         description: Error al agregar la consulta
 */
consultRouter.post('/consult/add', authenticateToken, validateConsultsFields, consultController.addCon);

/**
 * @swagger
 * /consult/{id}:
 *   put:
 *     summary: Modificar una consulta existente
 *     tags: [Consults]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la consulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               UserID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Consulta modificada exitosamente
 *       500:
 *         description: Error al modificar la consulta
 */
consultRouter.put('/consult/:id', authenticateToken, validateConsultsFields, consultController.modifyCon);

/**
 * @swagger
 * /consult/{id}:
 *   get:
 *     summary: Obtener una consulta por ID
 *     tags: [Consults]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la consulta
 *     responses:
 *       200:
 *         description: Consulta obtenida exitosamente
 *       500:
 *         description: Error al filtrar la consulta
 */
consultRouter.get('/consult/:id', authenticateToken, consultController.filterCon); 

/**
 * @swagger
 * /consult/{id}:
 *   delete:
 *     summary: Eliminar una consulta por ID
 *     tags: [Consults]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la consulta
 *     responses:
 *       200:
 *         description: Consulta eliminada exitosamente
 *       500:
 *         description: Error al eliminar la consulta
 */
consultRouter.delete('/consult/:id', authenticateToken, consultController.deleteCon);

/**
 * @swagger
 * /consults:
 *   get:
 *     summary: Muestra todas las consultas
 *     tags: [Consults]
 *     responses:
 *       200:
 *         description: Lista de consultas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 consult:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Consultas no encontradas
 */
consultRouter.get('/consults', authenticateToken, consultController.showCon); 

export default consultRouter;