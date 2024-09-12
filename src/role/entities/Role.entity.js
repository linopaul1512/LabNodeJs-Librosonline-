import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Role = sequelize.define('role',
{
    RoleID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});