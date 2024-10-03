import { SimilarProducts } from "./entities/Similarproducts.entity.js";


const createSim = async (simX) => {
    const newSim = await SimilarProducts.create(simX);
    return newSim;
};

const modifySim = async (id, simX) => {
    const updSim = await SimilarProducts.findOne(
        {where: { SimilarID: id }
    });
    updSim.Name = simX.Name;
    updSim.Description = simX.Description;
    updSim.UserID = simX.UserID;
    await updSim.save();
    return updSim;
}

const deleteSim = async (id) => {
    const delSiim = await SimilarProducts.findOne(
        {where: { SimilarID: id }
    });
    await delSiim.destroy();
    return delSiim;
};

const filterSim = async (id) => {
    return await SimilarProducts.findOne(
        {where: { SimilarID: id }
    });
};

export const similarRepository = {
    createSim,
    modifySim,
    deleteSim,
    filterSim

}