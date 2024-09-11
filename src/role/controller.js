import {roleService} from "./service.js"; 


const addRole = async (req, res) => {
    res.status(200).json(await roleService.addRole(req.body));
};

const modifyRole = async (req, res) => {
    res.status(200).json(await roleService.modifyRole(req.params.id, req.body));
};

export const roleController = {
    addRole,
    modifyRole,
}