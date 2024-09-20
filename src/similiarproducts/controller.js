import { similarService } from "./service.js";


const filterSim = async (req, res) => {
    res.status(200).json(await similarService.filterSim(req.params.id));
};

const addSim = async (req, res) => {
    res.status(200).json(await similarService.addIntertype(req.body));
};

const modifySim = async (req, res) => {
    res.status(200).json(await similarService.modifySim(req.params.id, req.body));
};

const deleteSim = async (req, res) => {
    res.status(200).json(await similarService.deleteSim(req.params.id));
};

export const similarController = {
    addSim,
    modifySim,
    filterSim,
    deleteSim
}