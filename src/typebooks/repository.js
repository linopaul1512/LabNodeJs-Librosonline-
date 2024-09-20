import { Typebooks } from "./entities/Typebooks.entity.js";


const createType = async (typeX) => {
    const type = await Typebooks.create(typeX);
    return type;
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
    filterType

}