import {consultService} from './service.js';

const showCon = async (req, res) => {
    res.status(200).json(await consultService.());
};

const filterCon= async (req, res) => {
    res.status(200).json(await consultService.filteraCon(req.params.id));
};

const addCon = async (req, res) => {
    res.status(200).json(await consultService.addCon(req.body));
};

const modifyCon= async (req, res) => {
    res.status(200).json(await consultService.modifyCon(req.params.id, req.body));
};

const deleteCon = async (req, res) => {
    res.status(200).json(await consultService.deleteCon(req.params.id));
};

export const consultController = {
    addCon,
    modifyCon,
    filterCon,
    deleteCon
}