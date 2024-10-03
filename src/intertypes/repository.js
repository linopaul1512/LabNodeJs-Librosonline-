import { InterType } from "../intertypes/entities/InterType.entity.js";

const createIntertype= async (interX) => {
    const newInter = await InterType.create(interX);
    return newInter;
};

const findAll = async () => {
    return await InterType.findAll();
};

const modifyIntertype = async (id, interX) => {
    const updInter = await InterType.findOne(
        {where: { InterTypeID: id }
    });
    updInter.PulicationID = interX.PublicationID;
    updInter.TypeID = interX.TypeID;
    await updInter.save();
    return updInter;
}

const deleteIntertype = async (id) => {
    const delInter = await InterType.findOne(
        {where: { InterTypeID: id }
    });
    await delInter.destroy();
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