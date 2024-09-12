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

const deleteAuthor = async (id) => {
  const delAuthor = await authorRepository.deletAuthor(id);
  return { deletedAuthor: delAuthor
  };
};

const filteraAuthor = async (id) => {
  const author = await authorRepository.filterAuthor(id);
  return {
    AuthorID: author.AuthorID,
    Name: author.Name,
    Biography: author.Biography,
    Country: author.Country
  };
};

export const authorService = {
    addAuth,
    modifyAuth,
    filteraAuthor,
    deleteAuthor
}