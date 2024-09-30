import {intertypeService} from './service.js';
import { validateInterTypeFields } from "../validations/validateFields.js";


//Agregar
const addIntertype = async (req, res) => {
    const error = validateInterTypeFields(req, res);
    if (error) return;  

    try {
        const newInter = await intertypeService.addIntertype(req.body);
        res.status(200).json(newInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar', error });
    }
};

// modificar
const modifyIntertype = async (req, res) => {
    const error = validateInterTypeFields(req, res);
    if (error) return; 
    
    try {
        const updatedInter = await intertypeService.modifyIntertype(req.params.id, req.body);
        res.status(200).json(updatedInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar', error });
    }
};

//mostar todos los autores
const showIntertypes = async (req, res) => {
    res.status(200).json(await intertypeService.showIntertype());
};

//eliminar
const deleteIntertype = async (req, res) => {
    try {
        const deletedInter = await intertypeService.deleteIntertype(req.params.id);
        res.status(200).json(deletedInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error });
    }
};

//buscar
const filterIntertype = async (req, res) => {
    try {
        const inter = await intertypeController.filterIntertype(req.params.id);
        res.status(200).json(inter);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar', error });
    }
};



export const intertypeController = {
    addIntertype,
    modifyIntertype,
    filterIntertype,
    deleteIntertype,
    showIntertypes
}