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

const deleteType = async (id) => {
  const delType = await typeRepository.deleteType(id);
  return { deletedType: delType
  };
};

const filterTypes = async (id) => {
  const type = await typeRepository.filterType(id);
  return {
    TypeID: type.TypeID,
    Description: type.Description
  };
};

export const typeService = {
    addType,
    modifyType,
    deleteType,
    filterTypes
}