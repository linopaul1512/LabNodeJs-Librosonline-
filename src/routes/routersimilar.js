import express from 'express';
import bodyParser from 'body-parser';
import { similarController } from '../similiarproducts/controller.js';
import { authenticator } from '../validations/authenticator.js';
import { validateSimilarProductsFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const similarRouter = express.Router()
similarRouter.use(bodyParser.json())
similarRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /similar/{id}:
 *   get:
 *     summary: Filtra un producto similar por ID
 *     tags: [Similarproducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto similar que se va a buscar
 *     responses:
 *       200:
 *         description: Descripción del producto similar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 SimilarID:
 *                   type: integer
 *                 Name:
 *                   type: string
 *                 Description:
 *                   type: string
 *                 UserID:
 *                   type: integer
 *       404:
 *         description: Producto similar no encontrado
 */
similarRouter.get('/similar/:id', authenticateToken, similarController.filterSim);

/**
 * @swagger
 * /similar/{id}:
 *   delete:
 *     summary: Elimina un producto similar
 *     tags: [Similarproducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto similar que se va a eliminar
 *     responses:
 *       200:
 *         description: Producto similar eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedSim:
 *                   type: object
 *       404:
 *         description: Producto similar no encontrado
 */
similarRouter.delete('/similar/:id', authenticateToken, authenticator.authorizePublisher, similarController.deleteSim);

/**
 * @swagger
 * /similar/add:
 *   post:
 *     summary: Añade un nuevo producto similar
 *     tags: [Similarproducts]
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
 *               UserID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto similar creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 similarproducts:
 *                   type: object
 *       400:
 *         description: Error creando del producto similar
 */
similarRouter.post('/similar/add', authenticateToken, authenticator.authorizePublisher, validateSimilarProductsFields, similarController.addSim);

/**
 * @swagger
 * /similar/{id}:
 *   put:
 *     summary: Modifica un producto similar existente
 *     tags: [Similarproducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto similar que se va a modificar
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
 *               UserID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto similar modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedSim:
 *                   type: object
 *       404:
 *         description: Producto similar no encontrado
 */
similarRouter.put('/similar/:id', authenticateToken, authenticator.authorizePublisher, validateSimilarProductsFields, similarController.modifySim);

export default similarRouter;