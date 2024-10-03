import {publicationService} from './service.js';
import { validatePublicationFields } from '../validations/validateFields.js';

const showPubs = async (req, res) => {
    res.status(200).json(await publicationService.showPubs(req.params.id));
};

const filterPub = async (req, res) => {
    try {
        const pub = await publicationService.filterPub(req.params.id);
        res.status(200).json(pub);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar la puvlicación', error });
    }
};

const addPub = async (req, res) => {
    try {
        const newPub = await publicationService.addPub(req.body);
        res.status(200).json(newPub);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la publicación', error });
    }
};

const modifyPub= async (req, res) => {  
    try {
        const updatedPub = await publicationService.modifyPub(req.params.id, req.body);
        res.status(200).json(updatedPub);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar la publicación', error });
    }
};

const deletePub = async (req, res) => {
    try {
        const deletedPub = await publicationService.deletePub(req.params.id);
        res.status(200).json(deletedPub);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la publicación', error });
    }
};

export const publicationController = {
    addPub,
    modifyPub,
    filterPub,
    deletePub,
    showPubs
}