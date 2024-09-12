import { authorRepository } from "./repository";

const addAuth = async (authorObj) => {
  const newAuthor = await authorRepository.createAuth(authorObj);
  return {
    author: newAuthor
  };
};

const modifyAuth = async (id, authorObj) => {
  const updAuthor = await authorRepository.modifyAuth(id, authorObj);
  return { 
    updatedAuthor: updAuthor
  };
};

export const authorService = {
    addAuth,
    modifyAuth
}