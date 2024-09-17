import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";

export const User = sequelize.define('user', {
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
    IdentityCard: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    Datebirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RoleID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});