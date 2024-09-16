import { InterSimilar } from './entities/Intersimilar.entity.js'


const createIntersim= async (interX) => {
    const newInter = await InterSimilar.create(interX);
    return newInter;
};

const modifyIntersim = async (id, interX) => {
    const updInter = await InterSimilar.findOne(
        {where: { InterSimilarID: id }
    });
    updInter.PublicationID = interX.PublicationID;
    updInter.SimilarID = interX.SimilarID;
    await updInter.save();
    return updInter;
}

const deleteIntersim = async (id) => {
    const delInter = await InterSimilar.findOne(
        {where: { InterSimilarID: id }
    });
    await delInter.deleteIntersim();
    return delInter;
};

const filterIntersim = async (id) => {
    return await InterSimilar.findOne(
        {where: { InterSimilarID: id }
    });
};

export const intersimRepository = {
    createIntersim,
    modifyIntersim,
    deleteIntersim,
    filterIntersim
}