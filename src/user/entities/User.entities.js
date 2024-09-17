import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const User = sequelize.define('user',
{
    UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ic: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Datebirth: {
        type: Sequelize.Date,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Role: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});