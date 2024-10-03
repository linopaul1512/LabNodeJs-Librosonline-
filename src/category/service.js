import { categoryRepository } from "./repository.js";
import { intercatRepository } from '../intercategory/repository.js'
import { sequelize } from "../db/db.config.js";


const showCategories = async () => {
  const categories = await categoryRepository.findAll();
  return {
    category: categories
  };
};

const addCategoryWithInterCat = async (categoryObj, interObj) => {
    return await sequelize.transaction(async (t) => {
        const newCategory = await categoryRepository.createCategory(categoryObj, { transaction: t });

        interObj.CategoryID = newCategory.id; 
        const newInterCategory = await intercatRepository.createIntercat(interObj, { transaction: t });

        return {
            category: newCategory,
            intercategory: newInterCategory
        };
    });
};

const addCategory = async (categoryObj) => {
  const newCategory = await categoryRepository.createCategory(categoryObj);
  return {
    category: newCategory
  };
};

const modifyCategory = async (id, categoryObj) => {
  const updCategory = await categoryRepository.modifyCategory(id, categoryObj);
  return { 
    updatedCategory: updCategory
  };
};

const filterCategory = async (name) => {
  const category = await categoryRepository.filterCategory(name);
  return {
    CategoryID: category.CategoryID,
    Name: category.Name
  };
};

const deleteCategory = async (id) => {
  const delCategory = await categoryRepository.deleteCategory(id);
  return { deletedCategory: delCategory
  };
};

export const categoryService = {
    addCategory,
    modifyCategory,
    filterCategory,
    deleteCategory,
    showCategories,
    addCategoryWithInterCat
}