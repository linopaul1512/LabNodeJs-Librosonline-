import { Typebooks } from "./entities/Typebooks.entity.js";

const createType = async (typeX) => {
    const type = await Typebooks.create(typeX);
    return type;
};

const modifyType = async (id, typeX) => {
    const updType = await Typebooks.findOne(
        {where: { TypeID: id }
    });
    updType.Description = typeX.Description;
    await updType.save();
    return updType;
}

const deleteType = async (id) => {
    const delType = await Typebooks.findOne(
        {where: { TypeID: id }
    });
    await delType.destroy();
    return delType;
};

const filterType = async (id) => {
    return await Typebooks.findOne(
        {where: { TypeID: id }
    });
};

const findAll = async () => {
    return await Typebooks.findAll();
};

export const typeRepository = {
    createType,
    modifyType,
    deleteType,
    filterType,
    findAll
}