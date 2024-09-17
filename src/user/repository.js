import { User } from "./entities/User.entities.js"

const createUser = async (userX) => {
    const newUser = await User.create(userX);
    return newUser;
};

const modifyUser = async (id, userX) => {
    const updUser = await User.findOne(
        {where: { UserID: id }
    });
    updUser.Name = userX.Name;
    updUser.Lastname = userX.Lastname;
    updUser.Ic = userX.Ic;
    updUser.Datebirth = userX.Datebirth;
    updUser.Address = userX.Address;
    updUser.Email = userX.Email;
    updUser.Role = userX.Role;
    await updUser.save();
    return updUser;
}



const deleteUser = async (id) => {
    const delUser = await User.findOne(
        {where: { UserID: id }
    });
    await delUser.delUser();
    return delUser;
};

const filterUser= async (id) => {
    return await User.findOne(
        {where: { UserID: id }
    });
};

export const userRepository = {
    createUser,
    modifyUser,
    deleteUser,
    filterUser
}