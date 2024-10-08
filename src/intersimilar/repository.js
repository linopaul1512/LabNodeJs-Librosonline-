import { InterSimilar } from './entities/Intersimilar.entity.js'


const createIntersim= async (interX) => {
    const newInter = await InterSimilar.create(interX);
    return newInter;
};

const modifyIntersim = async (id, interX) => {
    const updInter = await InterSimilar.findOne(
        {where: { InterTypeID: id }
    });
    updInter.PulicationID = interX.PublicationID;
    updInter.SimilarID = interX.SimilarID;
    await updInter.save();
    return updInter;
}

const deleteIntersim = async (id) => {
    const delInter = await InterSimilar.findOne(
        {where: { InterSimilarID: id }
    });
    await delInter.destroy();
    return delInter;
};

const filterIntersim = async (id) => {
    return await InterSimilar.findOne(
        {where: { InterSimilarID: id }
    });
};

const findAll = async () => {
    return await Author.findAll();
};

export const intersimRepository = {
    createIntersim,
    modifyIntersim,
    deleteIntersim,
    filterIntersim,
    findAll
}