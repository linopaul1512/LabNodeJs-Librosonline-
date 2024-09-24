import {userRepository} from "./repository.js";
import { User } from './entities/User.entity.js';

const authenticateUser = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  if (user.Password !== password) {
    throw new Error('Contraseña incorrecta');
  }

  return { UserID: user.UserID, Name: user.Name };
};

const showUsers = async () => {
  const users = await userRepository.findAll();
  return {
    user: users
  };
};

const addUser = async (userObj) => {
  const newUser = await userRepository.createUser(userObj);
  return {
    user: newUser
  };
};

const modifyUser = async (id, userObj) => {
  const updUser = await userRepository.modifyUser(id, userObj);
  return { 
    updatedUser: updUser
  };
};

const filterEmail = async (email) => {
  const user = await userRepository.findUserByEmail(email);
  return {
    UserID: user.CategoryID,
    Name: user.Name,
    Lastname: user.Lastname,
    Email: user.Email
  };
};

const deleteUser = async (id) => {
  const delUser = await userRepository.deleteUser(id);
  return { deletedUser: delUser
  };
};

const getUserRole = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user.RoleID;
};

export const userService = {
    authenticateUser,
    deleteUser,
    filterEmail,
    modifyUser,
    addUser,
    showUsers,
    getUserRole
}
