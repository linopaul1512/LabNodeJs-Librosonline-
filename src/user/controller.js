import { userService } from "./service";


const filterUser = async (req, res) => {
    res.status(200).json(await userService.filterUser(req.params.id));
};

const addIUser = async (req, res) => {
    res.status(200).json(await userService.addUSer(req.body));
};

const modifyUser = async (req, res) => {
    res.status(200).json(await userService.modifyUser(req.params.id, req.body));
};

const deleteUser = async (req, res) => {
    res.status(200).json(await userService.deleteUser(req.params.id));
};

export const userController = {
    addIUser,
    modifyUser,
    filterUser,
    deleteUser
}