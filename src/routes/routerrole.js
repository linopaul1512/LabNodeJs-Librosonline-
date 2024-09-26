import bodyParser from 'body-parser';
import express from 'express';
import { roleController } from '../role/controller.js';
import { authenticator } from '../validations/authenticator.js';


const roleRouter = express.Router()
roleRouter.use(bodyParser.json())
roleRouter.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @swagger
 * /role/add:
 *   post:
 *     summary: Añade un nuevo rol de usuario
 *     tags: [Role]
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
 *         description: Rol creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 role:
 *                   type: object
 *       400:
 *         description: Error en la creación del rol
 */
roleRouter.post('/role/add', authenticator.authorizePublisher, roleController.addRole);

/**
 * @swagger
 * /role/{id}:
 *   put:
 *     summary: Modifica un rol existente
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del rol que se va a modificar
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
 *         description: Rol modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedRole:
 *                   type: object
 *       404:
 *         description: Rol no encontrado
 */
roleRouter.put('/role/:id', authenticator.authorizePublisher, roleController.modifyRole);

export default roleRouter;