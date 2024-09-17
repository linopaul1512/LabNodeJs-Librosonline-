import {categoryService} from "./service.js"; 

const showCategories = async (req, res) => {
    res.status(200).json(await categoryService.showCategories());
};

const addCategory = async (req, res) => {
    res.status(200).json(await categoryService.addCategory(req.body));
};

const modifyCategory = async (req, res) => {
    res.status(200).json(await categoryService.modifyCategory(req.params.id, req.body));
};


const deleteCategory = async (req, res) => {
    res.status(200).json(await categoryService.deleteCategory(req.params.id));
};

const filterCategory = async (req, res) => {
    res.status(200).json(await categoryService.filterCategory(req.params.name));
};

export const categoryController = {
    addCategory,
    modifyCategory,
    filterCategory,
    deleteCategory,
    showCategories
}