import { userService } from './service.js';

export const login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await userService.authenticateUser(Email, Password);
    res.json({ message: 'Login exitoso', user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const showUsers = async (req, res) => {
    res.status(200).json(await userService.showUsers());
};

const addUser = async (req, res) => {
    res.status(200).json(await userService.addUser(req.body));
};

const modifyUser = async (req, res) => {
    res.status(200).json(await userService.modifyUser(req.params.id, req.body));
};


const deleteUser = async (req, res) => {
    res.status(200).json(await userService.deleteUser(req.params.id));
};

const filterEmail = async (req, res) => {
    res.status(200).json(await userService.filterEmail(req.params.email));
};

export const userController = {
    login,
    showUsers,
    addUser,
    modifyUser,
    deleteUser,
    filterEmail
}