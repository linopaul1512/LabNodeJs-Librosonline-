import { consultRepository } from "./repository.js";

const addCon = async (consultObj) => {
  const newConsult = await consultRepository.createConsult(consultObj);
  return {
    consults: newConsult
  };
};

const modifyCon = async (id, consultObj) => {
  const updConsult = await consultRepository.modifyConsult(id, consultObj);
  return { 
    updatedConsult: updConsult
  };
};

const showCon = async () => {
  const consults = await consultRepository.findAll();
  return {
    consults: consults
  };
};

const deleteCon = async (id) => {
  const delConsult = await consultRepository.deleteConsult(id);
  return { deletedConsult: delConsult
  };
};

const filteraCon = async (id) => {
  const consult = await consultRepository.filterConsult(id);
  return {
    ConsultID: consult.ConsultID,
    Content: consult.Content,
    UserID: consult.UserID,
    PublicationID: consult.PublicationID
  };
};

export const consultService = {
    addCon,
    modifyCon,
    filteraCon,
    deleteCon,
    showCon
}
