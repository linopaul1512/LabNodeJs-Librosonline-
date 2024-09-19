import {intercategoryService} from './service.js';


const filterIntercat = async (req, res) => {
    res.status(200).json(await intercategoryService.filterIntercat(req.params.id));
};

const showIntercat = async (req, res) => {
    res.status(200).json(await intercategoryService.showIntercat());
};

const addIntercat = async (req, res) => {
    res.status(200).json(await intercategoryService.addIntercat(req.body));
};

const modifyIntercat= async (req, res) => {
    res.status(200).json(await intercategoryService.modifyIntercat(req.params.id, req.body));
};

const deleteIntercat = async (req, res) => {
    res.status(200).json(await intercategoryService.deleteIntercat(req.params.id));
};

export const intercatController = {
    addIntercat,
    modifyIntercat,
    filterIntercat,
    deleteIntercat,
    showIntercat
}