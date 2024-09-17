import { name } from "body-parser";
import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Publication = sequelize.define('publication',
{
    PublicationID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AuthorID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    TypeID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Date: {
        type: Sequelize.Date,
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});