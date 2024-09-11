import {Role} from "./entities/Role.entity.js";

const createRol = async (roleX) => {
    const newRole = await Role.create(roleX);
    return newRole;
};

const modifyRol = async (id, roleX) => {
    const updRole = await Role.findOne(
        {where: { RoleID: id }
    });
    updRole.Name = roleX.Name;
    await updRole.save();
    return updRole;
}

export const roleRepository = {
    createRol,
    modifyRol
}