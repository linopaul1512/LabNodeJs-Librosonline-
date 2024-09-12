import { Author } from "./entities/Author.entity";

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

export const authorRepository = {
    createAuth,
    modifyAuth
}