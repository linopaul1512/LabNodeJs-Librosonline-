import { intersimRepository } from './repository.js';


const addIntersim= async (interObj) => {
  const newInter = await intersimRepository.createIntersim(interObj);
  return {
    InterSimilar: newInter
  };
};

const modifyIntersim = async (id, interObj) => {
  const updInter = await intersimRepository.modifyIntersim(id, interObj);
  return { 
    updatedInter: updInter
  };
};

const deleteIntersim = async (id) => {
  const delInter = await intersimRepository.deleteIntersim(id);
  return { deletedInter: delInter
  };
};

const filterIntersim = async (id) => {
  const intersim = await intersimRepository.filterIntersim(id);
  return {
    InterSimilarID: intersim.InterSimilarID,
    PublicationID: intersim.PublicationID,
    SimilarID: intersim.SimilarID
  };
};



export const intersimilarService = {
    addIntersim,
    modifyIntersim,
    deleteIntersim,
    filterIntersim
}