import {consultService} from './service.js';
import { validateConsultsFields } from "../validations/validateFields.js";


// Agregar
const addCon = async (req, res) => {
    const error = validateConsultsFields(req, res);
    if (error) return;  

    try {
        const newCont = await consultService.addCon(req.body);
        res.status(200).json(newCont);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la consulta', error });
    }
};


//buscar
const filterCon = async (req, res) => {
    try {
        const author = await consultService.filteraCon(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar la consulta', error });
    }
};



// modificar
const modifyCon = async (req, res) => {
    const error = validateConsultsFields(req, res);
    if (error) return; 
    
    try {
        const updatedCon = await consultService.modifyCon(req.params.id, req.body);
        res.status(200).json(updatedCon);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar la consulta', error });
    }
};


//mostar todos 
const showCon = async (req, res) => {
    res.status(200).json(await consultService.showCon());
};

//eliminar
const deleteCon = async (req, res) => {
    try {
        const deletedCon = await consultService.deleteCon(req.params.id);
        res.status(200).json(deletedCon);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la consulta', error });
    }
};


export const consultController = {
    addCon,
    modifyCon,
    filterCon,
    deleteCon,
    showCon
}







