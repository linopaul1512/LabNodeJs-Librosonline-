import { Author } from "./entities/Author.entity.js";

const createAuth = async (authorX) => {
    const newAuthor = await Author.create(authorX);
    return newAuthor;
};

const modifyAuth = async (id, authorX) => {
    const updAuthor = await Author.findOne(
        {where: { AuthorID: id }
    });
    updAuthor.Name = authorX.Name;
    await updAuthor.save();
    return updAuthor;
}

const deletAuthor = async (id) => {
    const delAuthor = await Author.findOne(
        {where: { AuthorID: id }
    });
    await delAuthor.destroy();
    return delAuthor;
};

const filterAuthor = async (id) => {
    return await Author.findOne(
        {where: { AuthorID: id }
    });
};

const findAll = async () => {
    return await Author.findAll();
};

export const authorRepository = {
    createAuth,
    modifyAuth,
    deletAuthor,
    filterAuthor,
    findAll
}