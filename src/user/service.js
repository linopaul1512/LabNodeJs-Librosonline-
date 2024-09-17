import { Role } from "../role/entities/Role.entity.js";
import { userRepository } from "./repository.js";

const addUSer = async (userObj) => {
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

const deleteUser = async (id) => {
  const delUser = await userRepository.deleteUser(id);
  return { deletedUser: delUser
  };
};

const filterUser = async (id) => {
  const user = await userRepository.filterUser(id);
  return {
    UserID: userUserID,
    Name: user.Name,
    Lastname: user.Lastname,
    Ic: user.Ic,
    Datebirth: user.Datebirth,
    Address: user.Address,
    Email: user.Email,
    Role: user.Role
  };
};

export const userService = {
    addUSer,
    modifyUser,
    filterUser,
    deleteUser
}