import { User } from './entities/User.entity.js';

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { Email: email } });
};

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
    updUser.IdentityCard = userX.IdentityCard;
    updUser.Datebirth = userX.Datebirth;
    updUser.Address = userX.Address;
    updUser.Email = userX.Email;
    updUser.Password = userX.Password
    await updUser.save();
    return updUser;
}

const findAll = async () => {
    return await User.findAll();
};

const deleteUser = async (id) => {
    const delUser = await User.findOne(
        {where: { UserID: id }
    });
    await delUser.destroy();
    return delUser;
};

export const userRepository = {
    createUser,
    modifyUser,
    findAll,
    deleteUser,
    findUserByEmail
}