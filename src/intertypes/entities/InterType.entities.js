import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const InterType = sequelize.define('intertype',
{
    InterTypeID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    TypeID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PublicationID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});