import { authorService } from "./service"; 


const addAuth = async (req, res) => {
    res.status(200).json(await authorService.addAuth(req.body));
};

const modifyAuth = async (req, res) => {
    res.status(200).json(await authorService.modifyAuth(req.params.id, req.body));
};

export const authorController = {
    addAuth,
    modifyAuth,
}