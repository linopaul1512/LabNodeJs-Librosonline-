import { intersimRepository } from './repository.js';

const showIntersim = async () => {
  const intersims = await intersimRepository.findAll();
  return {
    intersim: intersims
  };
};

 

const addIntersim= async (interObj) => {
  const newInter = await intersimRepository.createIntersim(interObj);
  return {
    intersimilar: newInter
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
    filterIntersim,
    showIntersim
}