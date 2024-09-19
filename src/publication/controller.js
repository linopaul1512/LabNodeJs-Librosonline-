import {publicationService} from './service.js';

const showPubs = async (req, res) => {
    res.status(200).json(await publicationService.showPubs(req.params.id));
};

const filterPub = async (req, res) => {
    res.status(200).json(await publicationService.filterPub(req.params.id));
};

const addPub = async (req, res) => {
    res.status(200).json(await publicationService.addPub(req.body));
};

const modifyPub= async (req, res) => {
    res.status(200).json(await publicationService.modifyPub(req.params.id, req.body));
};

const deletePub = async (req, res) => {
    res.status(200).json(await publicationService.deletePub(req.params.id));
};

export const publicationController = {
    addPub,
    modifyPub,
    filterPub,
    deletePub,
    showPubs
}