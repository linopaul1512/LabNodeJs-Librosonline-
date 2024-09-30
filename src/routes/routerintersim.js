import express from 'express';
import bodyParser from 'body-parser';
import { intersimController } from '../intersimilar/controller.js';
import { authenticator } from '../validations/authenticator.js';
import { validateInterSimilarFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const intersimRouter = express.Router()
intersimRouter.use(bodyParser.json())
intersimRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /intersim/{id}:
 *   get:
 *     summary: Filtra un Intersimilar por ID
 *     tags: [Intersimilar]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intersimilar que se va a filtrar
 *     responses:
 *       200:
 *         description: Detalles del Intersimilar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 InterSimilarID:
 *                   type: integer
 *                 PublicationID:
 *                   type: integer
 *                 SimilarID:
 *                   type: integer
 *       404:
 *         description: Intersimilar no encontrada
 */
intersimRouter.get('/intersim/:id', authenticateToken, authenticator.authorizePublisher, intersimController.filterIntersim); 

/**
 * @swagger
 * /intersim/{id}:
 *   delete:
 *     summary: Elimina un Intersimilar existente
 *     tags: [Intersimilar]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intersimilar que se va a eliminar
 *     responses:
 *       200:
 *         description: Intersimilar eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedInter:
 *                   type: object
 *       404:
 *         description: Intersimilar no encontrado
 */
intersimRouter.delete('/intersim/:id', authenticateToken, authenticator.authorizePublisher, intersimController.deleteIntersim);

/**
 * @swagger
 * /intersim/add:
 *   post:
 *     summary: Añade un nuevo Intersimilar
 *     tags: [Intersimilar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PublicationID:
 *                 type: integer
 *               SimilarID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Intersimilar creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 intersimilar:
 *                   type: object
 *       400:
 *         description: Error en la creación del Intersimilar
 */
intersimRouter.post('/intersim/add', authenticateToken, authenticator.authorizePublisher, validateInterSimilarFields, intersimController.addIntersimt);

/**
 * @swagger
 * /intersim/{id}:
 *   put:
 *     summary: Modifica un Intersimilar existente
 *     tags: [Intersimilar]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intersimilar que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PublicationID:
 *                 type: integer
 *               SimilarID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Intersimilar modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedInter:
 *                   type: object
 *       404:
 *         description: Intersimilar no encontrado
 */
intersimRouter.put('/intersim/:id', authenticateToken, authenticator.authorizePublisher, validateInterSimilarFields, intersimController.modifyIntersim);

export default intersimRouter;