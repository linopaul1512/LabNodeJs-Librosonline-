import bodyParser from 'body-parser';
import express from 'express';
import { publicationController } from '../publication/controller.js';
import { authenticator } from '../validations/authenticator.js';
import { validatePublicationFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const publicatinRouter = express.Router()
publicatinRouter.use(bodyParser.json())
publicatinRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /publication/add:
 *   post:
 *     summary: Añade una nueva publicación
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AuthorID:
 *                 type: integer
 *               TypeID:
 *                 type: integer
 *               Name:
 *                 type: string
 *               Date:
 *                 type: string
 *                 format: date
 *               Description:
 *                 type: string
 *               Content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 publication:
 *                   type: object
 *       400:
 *         description: Error en la creación de la publicación
 */
publicatinRouter.post('/publication/add', authenticateToken, authenticator.authorizePublisher, validatePublicationFields, publicationController.addPub);

/**
 * @swagger
 * /publication/{id}:
 *   put:
 *     summary: Modifica una publicación existente
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AuthorID:
 *                 type: integer
 *               TypeID:
 *                 type: integer
 *               Name:
 *                 type: string
 *               Date:
 *                 type: string
 *                 format: date
 *               Description:
 *                 type: string
 *               Content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación modificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedSim:
 *                   type: object
 *       404:
 *         description: Publicación no encontrada
 */
publicatinRouter.put('/publication/:id', authenticateToken, authenticator.authorizePublisher, validatePublicationFields, publicationController.modifyPub);

/**
 * @swagger
 * /publication/{id}:
 *   get:
 *     summary: Busca una publicación por ID
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación que se va a buscar
 *     responses:
 *       200:
 *         description: Detalles de la publicación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 PublicationID:
 *                   type: integer
 *                 AuthorID:
 *                   type: integer
 *                 TypeID:
 *                   type: integer
 *                 Name:
 *                   type: string
 *                 Date:
 *                   type: string
 *                   format: date
 *                 Description:
 *                   type: string
 *                 Content:
 *                   type: string
 *       404:
 *         description: Publicación no encontrada
 */
publicatinRouter.get('/publication/:id', authenticateToken, publicationController.filterPub);

/**
 * @swagger
 * /publication/{id}:
 *   delete:
 *     summary: Elimina una publicación
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación que se va a eliminar
 *     responses:
 *       200:
 *         description: Publicación eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedPub:
 *                   type: object
 *       404:
 *         description: Publicación no encontrada
 */
publicatinRouter.delete('/publication/:id', authenticateToken, authenticator.authorizePublisher, publicationController.deletePub);

export default publicatinRouter;