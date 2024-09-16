import { InterCategory } from './entities/Intercategory.entity.js'


const creatIntercat = async (interX) => {
    const newInter = await InterCategory.create(interX);
    return newInter;
};

const modifyIntercat = async (id, interX) => {
    const updInter = await InterCategory.findOne(
        {where: { InterCategoryID: id }
    });
    updInter.CategoryID = interX.CategoryID;
    updInter.PublicationID = interX.PublicationID;
    await updInter.save();
    return updInter;
}

const deleteIntercat = async (id) => {
    const delInter = await InterCategory.findOne(
        {where: { InterCategoryID: id }
    });
    await delInter.deleteIntercat();
    return delInter;
};

const filterIntercat = async (id) => {
    return await InterCategory.findOne(
        {where: { InterCategoryID: id }
    });
};

export const intercatRepository = {
    creatIntercat,
    modifyIntercat,
    deleteIntercat,
    filterIntercat

}