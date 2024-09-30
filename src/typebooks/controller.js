import { typeService } from "./service.js";
import { validateTypeBooksFields } from '../validations/validateFields.js';

const filterType = async (req, res) => {
    try {
        const type = await typeService.filterTypes(req.params.id);
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar el tipo', error });
    }
};

const addType = async (req, res) => {
    const error = validateTypeBooksFields(req, res);
    if (error) return;  

    try {
        const newType = await typeService.addType(req.body);
        res.status(200).json(newType);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el tipo', error });
    }
};

const modifyType = async (req, res) => {
    const error = validateTypeBooksFields(req, res);
    if (error) return; 
    
    try {
        const updatedType = await typeService.modifyType(req.params.id, req.body);
        res.status(200).json(updatedType);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el tipo', error });
    }
};

const deleteType = async (req, res) => {
    try {
        const deletedType = await typeService.deleteType(req.params.id);
        res.status(200).json(deletedType);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el tipo', error });
    }
};


export const typeController = {
    addType,
    modifyType,
    filterType,
    deleteType
}