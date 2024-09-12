import { typeRepository } from "./repository";

const addType = async (typeObj) => {
  const newType = await typeRepository.createRol(roleObj);
  return {
    typebooks: newType
  };
};

const modifyType = async (id, typeObj) => {
  const updType = await typeRepository.modifyRole(id, typeObj);
  return { 
    updatedType: updType
  };
};

export const typeService = {
    addType,
    modifyType
}