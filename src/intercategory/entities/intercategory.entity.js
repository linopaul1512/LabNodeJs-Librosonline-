import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const InterCategory = sequelize.define('InterCategory',
{
    InterCategoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CategoryID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PublicationID: {
        type: Sequelize.STRING,
        allowNull: false
    }
});