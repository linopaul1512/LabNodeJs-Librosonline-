import { authorService } from "./service.js"; 


const addAuth = async (req, res) => {
    res.status(200).json(await authorService.addAuth(req.body));
};

const modifyAuth = async (req, res) => {
    res.status(200).json(await authorService.modifyAuth(req.params.id, req.body));
};

const deleteAuth = async (req, res) => {
    res.status(200).json(await authorService.deleteAuthor(req.params.id));
};

const filterAuth = async (req, res) => {
    res.status(200).json(await authorService.filterAuthor(req.params.id));
};

const showAuthors = async (req, res) => {
    res.status(200).json(await authorService.showAuthors());
};

export const authorController = {
    addAuth,
    modifyAuth,
    deleteAuth,
    filterAuth,
    showAuthors
}