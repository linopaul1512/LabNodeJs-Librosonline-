import { userController } from '../user/controller.js';
import bodyParser from 'body-parser';
import express from 'express';
import { authenticator } from '../validations/authenticator.js';
import { validateUserFields } from '../validations/validateFields.js';
import authenticateToken from '../validations/authenticateToken.js';

const userRouter = express.Router()
userRouter.use(bodyParser.json())
userRouter.use(bodyParser.urlencoded({
    extended: true
}))

//User routes
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Muestra una lista de todos los usuarios
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       UserID:
 *                         type: integer
 *                       Name:
 *                         type: string
 *                       Lastname:
 *                         type: string
 *                       Email:
 *                         type: string
 */
userRouter.get('/users', authenticateToken, authenticator.authorizePublisher, userController.showUsers);

/**
 * @swagger
 * /user/filter/{email}:
 *   get:
 *     summary: Filtra un usuario por correo electrónico
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Correo electrónico del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserID:
 *                   type: integer
 *                 Name:
 *                   type: string
 *                 Lastname:
 *                   type: string
 *                 Email:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
userRouter.get('/user/filter/:email', authenticateToken, userController.filterEmail); 

/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: Añade un nuevo usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Lastname:
 *                 type: string
 *               IdentityCard:
 *                 type: integer
 *               Datebirth:
 *                 type: string
 *                 format: date
 *               Address:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *       400:
 *         description: Error en la creación del usuario
 */
userRouter.post('/user/add', authenticateToken, validateUserFields, userController.addUser);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Modifica un usuario existente
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario que se va a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Lastname:
 *                 type: string
 *               IdentityCard:
 *                 type: integer
 *               Datebirth:
 *                 type: string
 *                 format: date
 *               Address:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedUser:
 *                   type: object
 *       404:
 *         description: Usuario no encontrado
 */
userRouter.put('/user/:id', authenticateToken, validateUserFields, userController.modifyUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario que se va a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedUser:
 *                   type: object
 *       404:
 *         description: Usuario no encontrado
 */
userRouter.delete('/user/:id', authenticateToken, userController.deleteUser);

export default userRouter;