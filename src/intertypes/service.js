import { intertypeRepository } from './repository.js';

const addIntertype= async (interObj) => {
  const newInter = await intertypeRepository.createIntertype(interObj);
  return {
    intertype: newInter
  };
};

const modifyIntertype = async (id, interObj) => {
  const updInter = await intertypeRepository.modifyIntertype(id, interObj);
  return { 
    updatedInter: updInter
  };
};

const deleteIntertype = async (id) => {
  const delInter = await intertypeRepository.deleteIntertype(id);
  return { deletedInter: delInter
  };
};

const filterIntertype = async (id) => {
  const intertype = await intertypeRepository.filterIntertype(id);
  return {
    InterTypeID: intertype.InterTypeID,
    PublicationID: intertype.PublicationID,
    TypeID: intertype.TypeID
  };
};

export const intertypeService = {
    addIntertype,
    modifyIntertype,
    deleteIntertype,
    filterIntertype
}