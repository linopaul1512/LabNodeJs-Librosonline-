import {intercategoryService} from './service.js';
import { validateInterCategoryFields } from "../validations/validateFields.js";

//agregar
const addIntercat = async (req, res) => {
    try {
        const newInter = await intercategoryService.addIntercat(req.body);
        res.status(200).json(newInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar', error });
    }
};

// modificar
const modifyIntercat = async (req, res) => {  
    try {
        const updatedInter = await intercategoryService.modifyIntercat(req.params.id, req.body);
        res.status(200).json(updatedInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar', error });
    }
};

//eliminar
const deleteIntercat = async (req, res) => {
    try {
        const deletedInter = await intercategoryService.deleteIntercat(req.params.id);
        res.status(200).json(deletedInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error });
    }
};

//Bsucar todos
const showIntercat = async (req, res) => {
    res.status(200).json(await intercategoryService.showIntercat());
};



//buscar
const filterIntercat = async (req, res) => {
    try {
        const author = await intercatController.filterIntercat(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar', error });
    }
};

export const intercatController = {
    addIntercat,
    modifyIntercat,
    filterIntercat,
    deleteIntercat,
    showIntercat
}