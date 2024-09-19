import {intertypeService} from './service.js';

const showIntertypes = async (req, res) => {
    res.status(200).json(await intertypeService.showIntertype());
};

const filterIntertype = async (req, res) => {
    res.status(200).json(await intertypeService.filterIntertype(req.params.id));
};

const addIntertype = async (req, res) => {
    res.status(200).json(await intertypeService.addIntertype(req.body));
};

const modifyIntertype= async (req, res) => {
    res.status(200).json(await intertypeService.modifyIntertype(req.params.id, req.body));
};

const deleteIntertype = async (req, res) => {
    res.status(200).json(await intertypeService.deleteIntertype(req.params.id));
};

export const intertypeController = {
    addIntertype,
    modifyIntertype,
    filterIntertype,
    deleteIntertype,
    showIntertypes
}