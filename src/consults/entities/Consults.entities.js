import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Consults = sequelize.define('consults',
{
    ConsultID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PublicationID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});