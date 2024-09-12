import {Category} from "./entities/Category.entity.js";

const findAll = async () => {
    return await Category.findAll();
};

const createCategory = async (categoryX) => {
    const newCategory = await Category.create(categoryX);
    return newCategory;
};

const modifyCategory = async (id, categoryX) => {
    const updCategory = await Category.findOne(
        {where: { CategoryID: id }
    });
    updCategory.Name = categoryX.Name;
    await updCategory.save();
    return updCategory;
}

const filterCategory = async (name) => {
    return await Category.findOne(
        {where: { Name: name }
    });
};

const deleteCategory = async (id) => {
    const delCategory = await Category.findOne(
        {where: { CategoryID: id }
    });
    await delCategory.destroy();
    return delCategory;
};

export const categoryRepository = {
    createCategory,
    modifyCategory,
    filterCategory,
    deleteCategory,
    findAll
}