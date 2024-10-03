import {roleService} from "./service.js"; 
import { validateRoleFields } from '../validations/validateFields.js';

const addRole = async (req, res) => {
    try {
        const newRole = await roleService.addRole(req.body);
        res.status(200).json(newRole);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el role', error });
    }
};

const modifyRole = async (req, res) => {
    try {
        const updatedRole = await roleService.modifyRole(req.params.id, req.body);
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el role', error });
    }
};

export const roleController = {
    addRole,
    modifyRole,
}