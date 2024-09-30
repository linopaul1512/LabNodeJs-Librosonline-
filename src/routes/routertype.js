import express from 'express';
import bodyParser from 'body-parser';
import { typeController } from '../typebooks/controller.js';
import { authenticator } from '../validations/authenticator.js';
import { validateTypeBooksFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const typeRouter = express.Router()
typeRouter.use(bodyParser.json())
typeRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /type/{id}:
 *   get:
 *     summary: Obtiene un tipo de libro por ID
 *     tags: [TypeBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de libro que se va a buscar
 *     responses:
 *       200:
 *         description: Descripción del tipo de libro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 TypeID:
 *                   type: integer
 *                 Description:
 *                   type: string
 *       404:
 *         description: Tipo de libro no encontrado
 */
typeRouter.get('/type/:id', authenticateToken, typeController.filterType);

/**
 * @swagger
 * /type/{id}:
 *   delete:
 *     summary: Elimina un tipo de libro
 *     tags: [TypeBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de libro que se va a eliminar
 *     responses:
 *       200:
 *         description: Tipo de libro eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedType:
 *                   type: object
 *       404:
 *         description: Tipo de libro no encontrado
 */
typeRouter.delete('/type/:id', authenticateToken, authenticator.authorizePublisher, typeController.deleteType);

/**
 * @swagger
 * /type/add:
 *   post:
 *     summary: Añade un nuevo tipo de libro
 *     tags: [TypeBooks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de libro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 typebooks:
 *                   type: object
 *       400:
 *         description: Error en la creación del tipo de libro
 */
typeRouter.post('/type/add', authenticateToken, authenticator.authorizePublisher, validateTypeBooksFields, typeController.addType);

/**
 * @swagger
 * /type/{id}:
 *   put:
 *     summary: Modifica un tipo de libro existente
 *     tags: [TypeBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de libro que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de libro modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedType:
 *                   type: object
 *       404:
 *         description: Tipo de libro no encontrado
 */
typeRouter.put('/type/:id', authenticateToken, authenticator.authorizePublisher, validateTypeBooksFields, typeController.modifyType);

export default typeRouter;