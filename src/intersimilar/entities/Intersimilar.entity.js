import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";
export const InterSimilar = sequelize.define('InterSimilar',
{
    InterSimilarID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PublicationID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    SimilarID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});