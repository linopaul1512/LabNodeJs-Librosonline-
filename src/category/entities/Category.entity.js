import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Category = sequelize.define('category',
{
    CategoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});