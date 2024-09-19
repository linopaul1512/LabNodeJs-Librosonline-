import {roleRepository} from "./repository.js";

const addRole = async (roleObj) => {
  const newRole = await roleRepository.createRol(roleObj);
  return {
    role: newRole
  };
};


const showRole = async () => {
  const roles = await roleRepository.findAll();
  return {
    role: roles
  };
};


const modifyRole = async (id, roleObj) => {
  const updRole = await roleRepository.modifyRol(id, roleObj);
  return { 
    updatedRole: updRole
  };
};

export const roleService = {
    addRole,
    modifyRole,
    showRole
}