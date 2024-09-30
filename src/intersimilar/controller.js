import {intersimilarService} from './service.js';
import { validateInterSimilarFields } from "../validations/validateFields.js";


//Agregar
const addIntersim = async (req, res) => {
    const error = validateInterSimilarFields(req, res);
    if (error) return;  

    try {
        const newInter = await intersimilarService.addIntersim(req.body);
        res.status(200).json(newInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar', error });
    }
};

// modificar
const modifyIntersim = async (req, res) => {
    const error = validateInterSimilarFields(req, res);
    if (error) return; 
    
    try {
        const updatedInter = await intersimilarService.addIntersim(req.params.id, req.body);
        res.status(200).json(updatedInter);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar', error });
    }
};

//mostar todos 
const showIntersims  = async (req, res) => {
    res.status(200).json(await intersimilarService.showIntersim());
};

//eliminar
const deleteIntersim = async (req, res) => {
    try {
        const deletedInter = await intersimilarService.deleteIntersim(req.params.id);
        res.status(200).json(deleteIntersim);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error });
    }
};

//buscar
const filterIntersim = async (req, res) => {
    try {
        const inter = await intersimilarService.filterIntersim(req.params.id);
        res.status(200).json(inter);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar', error });
    }
};


export const intersimController = {
    addIntersim,
    modifyIntersim,
    filterIntersim,
    deleteIntersim,
    showIntersims
}