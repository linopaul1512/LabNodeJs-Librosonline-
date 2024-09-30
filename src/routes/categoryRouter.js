import { categoryController } from '../category/controller.js';
import bodyParser from 'body-parser';
import express from 'express';
import { authenticator } from '../validations/authenticator.js';
import { validateAuthorFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const categoryRouter = express.Router()
categoryRouter.use(bodyParser.json())
categoryRouter.use(bodyParser.urlencoded({
    extended: true
}))

//Category routes
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Muestra todas las categorías
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Categoría no encontrada
 */
categoryRouter.get('/categories', categoryController.showCategories); 

/**
 * @swagger
 * /category/filter/{name}:
 *   get:
 *     summary: Filtra una categoría por nombre
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la categoría que se va a filtrar
 *     responses:
 *       200:
 *         description: Descripción de la categoría filtrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 CategoryID:
 *                   type: integer
 *                 Name:
 *                   type: string
 *       404:
 *         description: Categoría no encontrada
 */
categoryRouter.get('/category/filter/:name', categoryController.filterCategory);

/**
 * @swagger
 * /category/add:
 *   post:
 *     summary: Añade una nueva categoría
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   type: object
 *       400:
 *         description: Error en la creación de la categoría
 */
categoryRouter.post('/category/add', authenticateToken, authenticator.authorizePublisher, categoryController.addCategory);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Modifica una categoría existente
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría modificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedCategory:
 *                   type: object
 *       404:
 *         description: Categoría no encontrada
 */
categoryRouter.put('/category/:id', authenticator.authorizePublisher, categoryController.modifyCategory);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Elimina una categoría
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría que se va a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedCategory:
 *                   type: object
 *       404:
 *         description: Categoría no encontrada
 */
categoryRouter.delete('/category/:id', authenticator.authorizePublisher, categoryController.deleteCategory);

export default categoryRouter;