import { Typebooks } from "./entities/Typebooks.entities.js";

const findAll = async () => {
    return await Typebooks.findAll();
};

const createType = async (typeX) => {
    const typeX = await Typebooks.create(typeX);
    return typeX;
};

const modifyType = async (id, typeX) => {
    const updType = await Typebooks.findOne(
        {where: { TypeID: id }
    });
    updType.Name = typeX.Name;
    await updType.save();
    return updType;
}

const deleteType = async (id) => {
    const delType = await Typebooks.findOne(
        {where: { TypeID: id }
    });
    await delType.deleteType();
    return delType;
};

const filterType = async (id) => {
    return await Typebooks.findOne(
        {where: { TypeID: id }
    });
};

export const typeRepository = {
    createType,
    modifyType,
    deleteType,
    filterType,
    findAll

}