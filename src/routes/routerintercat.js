import bodyParser from 'body-parser';
import express from 'express';
import { intercatController } from '../intercategory/controller.js';

const intercatRouter = express.Router()
intercatRouter.use(bodyParser.json())
intercatRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /intercat/add:
 *   post:
 *     summary: Añade objeto a la tabla intermedia intercategoría
 *     tags: [Intercategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Intercategory creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 intercategory:
 *                   type: object
 *       400:
 *         description: Error en la creación de intercategory
 */
intercatRouter.post('/intercat/add', intercatController.addIntercat);

/**
 * @swagger
 * /intercat/{id}:
 *   put:
 *     summary: Modifica un Intercategory existente
 *     tags: [Intercategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intercategory que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Intercategory modificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedInter:
 *                   type: object
 *       404:
 *         description: Intercategory no encontrada
 */
intercatRouter.put('/intercat/:id', intercatController.modifyIntercat);

/**
 * @swagger
 * /intercat/{id}:
 *   get:
 *     summary: Filtra un Intercategory por ID
 *     tags: [Intercategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intercategory que se va a buscar
 *     responses:
 *       200:
 *         description: Detalles del Intercategory
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 InterCategoryID:
 *                   type: integer
 *                 CategoryID:
 *                   type: integer
 *                 PublicationID:
 *                   type: integer
 *       404:
 *         description: Intercategory no encontrado
 */
intercatRouter.get('/intercat/:id', intercatController.filterIntercat); 

/**
 * @swagger
 * /intercat/{id}:
 *   delete:
 *     summary: Elimina un Intercategory
 *     tags: [Intercategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Intercategory que se va a eliminar
 *     responses:
 *       200:
 *         description: Intercategory eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedInter:
 *                   type: object
 *       404:
 *         description: Intercategory no encontrada
 */
intercatRouter.delete('/intercat/:id', intercatController.deleteIntercat);

export default intercatRouter;