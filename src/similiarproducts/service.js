import { similarRepository } from './repository.js';


const addSim= async (simObj) => {
  const newSim = await similarRepository.createSim(simObj);
  return {
    similarproducts: newSim
  };
};

const modifySim = async (id, interObj) => {
  const updSim = await similarRepository.modifySim(id, interObj);
  return { 
    updatedSim: updSim
  };
};

const deleteSim = async (id) => {
  const delSim = await similarRepository.deleteSim(id);
  return { deletedSim: delSim
  };
};

const filterSim = async (id) => {
  const intersim = await similarRepository.filterSim(id);
  return {
    SimilarID: intersim.SimilarID,
    Name: intersim.Name,
    Description: intersim.Description,
    UserID: intersim.UserID,
  };
};



export const similarService = {
    addSim,
    modifySim,
    deleteSim,
    filterSim
}