import { publicationRepository } from "./repository.js";


const addPub= async (simObj) => {
  const newPub = await publicationRepository.createPub(simObj);
  return {
    publication: newPub
  };
};

const modifyPub = async (id, interObj) => {
  const updSim = await publicationRepository.modifyPub(id, interObj);
  return { 
    updatedSim: updSim
  };
};

const deletePub = async (id) => {
  const delPub = await publicationRepository.deletePub(id);
  return { deletedPub: delPub };
};

const filterPub = async (id) => {
  const publication = await publicationRepository.filterPub(id);
  return {
    PublicationID: publication.PublicationID,
    AuthorID:publication.AuthorID,
    TypeID: publication.TypeID,
    Name: publication.Name,
    Date: publication.Date,
    Description: publication.Description,
    Content: publication.Content
  };
};

const showPubs = async () => {
  const publications = await publicationRepository.findAll();
  return {
    publication: publications
  };
};


export const publicationService = {
    addPub,
    modifyPub,
    deletePub,
    filterPub,
    showPubs
}
