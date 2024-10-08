import { authorService } from "./service.js"; 
import { validateAuthorFields } from "../validations/validateFields.js";

//Agregar
const addAuth = async (req, res) => {
    try {
        const newAuthor = await authorService.addAuth(req.body);
        res.status(200).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el autor', error });
    }
};

// modificar
const modifyAuth = async (req, res) => { 
    try {
        const updatedAuthor = await authorService.modifyAuth(req.params.id, req.body);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el autor', error });
    }
};

//mostar todos los autores
const showAuths = async (req, res) => {
    res.status(200).json(await authorService.showAuths());
};

//eliminar
const deleteAuth = async (req, res) => {
    try {
        const deletedAuthor = await authorService.deleteAuthor(req.params.id);
        res.status(200).json(deletedAuthor);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el autor', error });
    }
};

//buscar
const filterAuth = async (req, res) => {
    try {
        const author = await authorService.filterAuthor(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar el autor', error });
    }
};



export const authorController = {
    addAuth,
    modifyAuth,
    deleteAuth,
    filterAuth,
    showAuths
}