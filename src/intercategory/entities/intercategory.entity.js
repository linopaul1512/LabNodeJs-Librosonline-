import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const InterCategory = sequelize.define('intercategory',
{
    InterCategoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CategoryID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PublicationID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});