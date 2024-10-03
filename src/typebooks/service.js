import { typeRepository } from "./repository.js";


const addType = async (typeObj) => {
  const newType = await typeRepository.createType(typeObj);
  return {
    typebooks: newType
  };
};

const modifyType = async (id, typeObj) => {
  const updType = await typeRepository.modifyType(id, typeObj);
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

const showType = async () => {
  const types = await typeRepository.findAll();
  return {
    type: types
  };
};

export const typeService = {
    addType,
    modifyType,
    deleteType,
    filterTypes,
    showType
}