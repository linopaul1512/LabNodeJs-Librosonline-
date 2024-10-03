import { userService } from './service.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
      const user = await userService.authenticateUser(Email, Password);

      const accessToken = jwt.sign(
        { id: user.UserID, role: user.RoleID },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' } //El token expira en 1 hora
    );
    res.json({ message: "Login exitoso", accessToken });
} catch (error) {
    res.status(500).json({ message: 'Error de servidor', error: error.message });
}
};

const showUsers = async (req, res) => {
    res.status(200).json(await userService.showUsers());
};

const addUser = async (req, res) => {
    try {
        const newUser = await userService.addUser(req.body);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el usuario', error });
    }
};

const modifyUser = async (req, res) => {
    try {
        const updatedUser = await userService.modifyUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el usuario', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
};

const filterEmail = async (req, res) => {
    try {
        const user = await userService.filterEmail(req.params.email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar el usuario', error });
    }
};

export const userController = {
    login,
    showUsers,
    addUser,
    modifyUser,
    deleteUser,
    filterEmail
}