import { Typebooks } from "./entities/Typebooks.entities";

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

export const typeRepository = {
    createType,
    modifyType
}