import {categoryRepository} from "./repository.js";

const showCategories = async () => {
  const categories = await categoryRepository.findAll();
  return {
    category: categories
  };
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
    showCategories
}