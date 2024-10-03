import { intercatRepository } from './repository.js'


const addIntercat = async (interObj) => {
  const newInter = await intercatRepository.createIntercat(interObj);
  return {
    intercategory: newInter
  };
};

const modifyIntercat = async (id, interObj) => {
  const updInter = await intercatRepository.modifyIntercat(id, interObj);
  return { 
    updatedInter: updInter
  };
};

const deleteIntercat = async (id) => {
  const delInter = await intercatRepository.deleteIntercat(id);
  return { deletedInter: delInter
  };
};

const filterIntercat = async (id) => {
  const intercat = await intercatRepository.filterIntercat(id);
  return {
    InterCategoryID: intercat.InterCategoryID,
    CategoryID: intercat.CategoryID,
    PublicationID: intercat.PublicationID
  };
};



export const intercategoryService = {
    addIntercat,
    modifyIntercat,
    deleteIntercat,
    filterIntercat
}