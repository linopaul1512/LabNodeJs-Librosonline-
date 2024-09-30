import bodyParser from 'body-parser';
import express from 'express';
import { authorController } from '../author/controller.js';
import { authenticator } from '../validations/authenticator.js';
import { validateAuthorFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const authorRouter = express.Router()
authorRouter.use(bodyParser.json())
authorRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /author/{id}:
 *   get:
 *     summary: Filtra un autor por ID
 *     tags: [Author]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del autor que se va a buscar
 *     responses:
 *       200:
 *         description: Detalles del autor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 AuthorID:
 *                   type: integer
 *                 Name:
 *                   type: string
 *                 Biography:
 *                   type: string
 *                 Country:
 *                   type: string
 *       404:
 *         description: Autor no encontrado
 */
authorRouter.get('/author/:id',authenticateToken, authenticator.authorizePublisher, authorController.filterAuth); 

/**
 * @swagger
 * /author/{id}:
 *   delete:
 *     summary: Elimina un autor
 *     tags: [Author]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del autor que se va a eliminar
 *     responses:
 *       200:
 *         description: Autor eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedAuthor:
 *                   type: object
 *       404:
 *         description: Autor no encontrado
 */
authorRouter.delete('/author/:id',authenticateToken, authenticator.authorizePublisher, authorController.deleteAuth);

/**
 * @swagger
 * /author/add:
 *   post:
 *     summary: Añade un nuevo autor
 *     tags: [Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Biography:
 *                 type: string
 *               Country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   type: object
 *       400:
 *         description: Error en la creación del autor
 */
authorRouter.post('/author/add', authenticateToken, authenticator.authorizePublisher, validateAuthorFields, authorController.addAuth);

/**
 * @swagger
 * /author/{id}:
 *   put:
 *     summary: Modifica un autor existente
 *     tags: [Author]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del autor que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Biography:
 *                 type: string
 *               Country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedAuthor:
 *                   type: object
 *       404:
 *         description: Autor no encontrado
 */
authorRouter.put('/author/:id', authenticateToken, authenticator.authorizePublisher, authorController.modifyAuth);

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Muestra todos los autores
 *     tags: [Author]
 *     responses:
 *       200:
 *         description: Lista de autores
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
 *         description: Autores no encontrados
 */
authorRouter.get('/authors', authenticateToken, authorController.showAuthors);

export default authorRouter;