import { typeService } from "./service";


const addType = async (req, res) => {
    res.status(200).json(await typeService.addType(req.body));
};

const modifyType = async (req, res) => {
    res.status(200).json(await typeService.modifyType(req.params.id, req.body));
};

export const typeController = {
    addType,
    modifyType,
}