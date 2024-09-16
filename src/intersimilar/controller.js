import {intersimilarService} from './service.js';


const filterIntersim = async (req, res) => {
    res.status(200).json(await intersimilarService.filterIntersim(req.params.id));
};

const addIntersimt = async (req, res) => {
    res.status(200).json(await intersimilarService.addIntersim(req.body));
};

const modifyIntersim= async (req, res) => {
    res.status(200).json(await intersimilarService.modifyIntersim(req.params.id, req.body));
};

const deleteIntersim = async (req, res) => {
    res.status(200).json(await intersimilarService.deleteIntersim(req.params.id));
};

export const intersimController = {
    addIntersimt,
    modifyIntersim,
    filterIntersim,
    deleteIntersim
}