import bodyParser from 'body-parser';
import express from 'express';
import { intertypeController } from '../intertypes/controller.js';

const intertypeRouter = express.Router()
intertypeRouter.use(bodyParser.json())
intertypeRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /intertype/add:
 *   post:
 *     summary: Añade un objeto a la tabla intermedia intertype
 *     tags: [Intertype]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TypeID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: InterType creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 intertype:
 *                   type: object
 *       400:
 *         description: Error en la creación del InterType
 */
intertypeRouter.post('/intertype/add', intertypeController.addIntertype);

/**
 * @swagger
 * /intertype/{id}:
 *   put:
 *     summary: Modifica un InterType existente
 *     tags: [Intertype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del InterType que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TypeID:
 *                 type: integer
 *               PublicationID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: InterType modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedInter:
 *                   type: object
 *       404:
 *         description: InterType no encontrado
 */
intertypeRouter.put('/intertype/:id', intertypeController.modifyIntertype);

/**
 * @swagger
 * /intertype/{id}:
 *   get:
 *     summary: Obtiene un InterType por ID
 *     tags: [Intertype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del InterType que se va a recuperar
 *     responses:
 *       200:
 *         description: Detalles del InterType
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 InterTypeID:
 *                   type: integer
 *                 PublicationID:
 *                   type: integer
 *                 TypeID:
 *                   type: integer
 *       404:
 *         description: InterType no encontrado
 */
intertypeRouter.get('/intertype/:id', intertypeController.filterIntertype); 

/**
 * @swagger
 * /intertype/{id}:
 *   delete:
 *     summary: Elimina un InterType
 *     tags: [Intertype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del InterType que se va a eliminar
 *     responses:
 *       200:
 *         description: InterType eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedInter:
 *                   type: object
 *       404:
 *         description: InterType no encontrado
 */
intertypeRouter.delete('/intertype/:id', intertypeController.deleteIntertype);

export default intertypeRouter;