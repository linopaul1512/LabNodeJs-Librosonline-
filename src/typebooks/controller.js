import {typeService} from './service.js';



const filterType = async (req, res) => {
    res.status(200).json(await typeService.filterTypes(req.params.id));
};

const addType = async (req, res) => {
    res.status(200).json(await typeService.addType(req.body));
};

const modifyType = async (req, res) => {
    res.status(200).json(await typeService.modifyType(req.params.id, req.body));
};

const deleteType = async (req, res) => {
    res.status(200).json(await typeService.deleteType(req.params.id));
};

export const typeController = {
    addType,
    modifyType,
    filterType,
    deleteType
}