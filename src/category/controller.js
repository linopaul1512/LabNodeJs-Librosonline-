import { categoryService } from "./service.js";
import { validateCategoryFields } from '../validations/validateFields.js';

const showCategories = async (req, res) => {
    res.status(200).json(await categoryService.showCategories());
};

const addCategory = async (req, res) => {
    const error = validateCategoryFields(req, res);
    if (error) return;  
    try {
        const newCategory = await categoryService.addCategory(req.body);
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar la categoría', error });
    }
};

const modifyCategory = async (req, res) => {
    const error = validateCategoryFields(req, res);
    if (error) return; 
    
    try {
        const updatedCategory = await categoryService.modifyCategory(req.params.id, req.body);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar la categoría', error });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await categoryService.deleteCategory(req.params.id);
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
};

const filterCategory = async (req, res) => {
    try {
        const category = await categoryService.filterCategory(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al filtrar las categorías', error });
    }
};

export const categoryController = {
    addCategory,
    modifyCategory,
    filterCategory,
    deleteCategory,
    showCategories
}