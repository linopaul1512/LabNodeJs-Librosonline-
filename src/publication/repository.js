import { Publication } from './entities/Publication.entity.js'

const findAll = async () => {
    return await Publication.findAll();
};

const createPub= async (pubX) => {
    const newPub = await Publication.create(pubX);
    return newPub;
};

const modifyPub = async (id, pubX) => {
    const updPub = await Publication.findOne(
        {where: { PublicationID: id }
    });
    updPub.PublicationID= pubX.PublicationID;
    updPub.AuthorID = pubX.AuthorID;
    updPub.Name = pubX.Name;
    updPub.Date = pubX.Date;
    updPub.Description = pubX.Description;
    updPub.Content = pubX.Content;
    await updPub.save();
    return updPub;
}

const deletePub = async (id) => {
    const delPub = await Publication.findOne(
        {where: { PublicationID: id }
    });
    await delPub.destroy();
    return delPub;
};

const filterPub= async (id) => {
    return await Publication.findOne(
        {where: { PublicationID: id }
    });
};

export const publicationRepository = {
    createPub,
    modifyPub,
    deletePub,
    filterPub,
    findAll
}