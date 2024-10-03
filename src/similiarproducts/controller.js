import { similarService } from "./service.js";

const filterSim = async (req, res) => {
    try {
        const sim = await similarService.filterSim(req.params.id);
        res.status(200).json(sim);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar el producto similar', error });
    }
};

const addSim = async (req, res) => {
    try {
        const newSim = await similarService.addSim(req.body);
        res.status(200).json(newSim);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto similar', error });
    }
};

const modifySim = async (req, res) => {
    try {
        const updatedSim = await similarService.modifySim(req.params.id, req.body);
        res.status(200).json(updatedSim);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el producto similar', error });
    }
};

const deleteSim = async (req, res) => {
    try {
        const deletedSim = await similarService.deleteSim(req.params.id);
        res.status(200).json(deletedSim);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto similar', error });
    }
};

const showSim = async (req, res) => {
    res.status(200).json(await similarService.showSim());
};


export const similarController = {
    addSim,
    modifySim,
    filterSim,
    deleteSim,
    showSim
}