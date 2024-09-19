import { InterType } from "./entities/InterType.entities.js";

const findAll = async () => {
    return await InterType.findAll();
};

const createIntertype = async (interX) => {
    const newInter = await InterType.create(interX);
    return newInter;
};

const modifyIntertype = async (id, interX) => {
    const updInter = await InterType.findOne(
        {where: { InterTypeID: id }
    });
    updInter.TypeID = interX.TypeID;
    updInter.PublicationID = interX.PublicationID;
    await updInter.save();
    return updInter;
}

const deleteIntertype = async (id) => {
    const delInter = await InterType.findOne(
        {where: { InterTypeID: id }
    });
    await delInter.deleteIntertype();
    return delInter;
};

const filterIntertype = async (id) => {
    return await InterType.findOne(
        {where: { InterTypeID: id }
    });
};

export const intertypeRepository = {
    createIntertype,
    modifyIntertype,
    deleteIntertype,
    filterIntertype,
    findAll

}