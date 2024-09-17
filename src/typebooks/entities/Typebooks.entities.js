import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Typebooks = sequelize.define('typebooks',
{
    TypeID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});