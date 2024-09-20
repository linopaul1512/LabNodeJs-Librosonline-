import { Consults } from "./entities/Consults.entity.js"


const createConsult = async (consultX) => {
    const newConsult = await Consults.create(consultX);
    return newConsult;
};

const modifyConsult = async (id, consultX) => {
    const updConsult = await Consults.findOne(
        {where: { ConsultID: id }
    });
    updConsult.Name = consultX.Name;
    updConsult.UserID = consultX.UserID;
    updConsult.PublicationID = consultX.PublicationID;

    await updConsult.save();
    return updConsult;
}

const deleteConsult = async (id) => {
    const delConsult = await Consults.findOne(
        {where: { ConsultID: id }
    });
    await delConsult.deleteConsult();
    return delConsult;
};

const filterConsult = async (id) => {
    return await Consults.findOne(
        {where: { ConsultID: id }
    });
};

export const consultRepository = {
    createConsult,
    modifyConsult,
    deleteConsult,
    filterConsult

}