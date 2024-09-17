import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const Author = sequelize.define('author',
{
    AuthorID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Biography: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Country: {
        type: Sequelize.STRING,
        allowNull: false
    }
});