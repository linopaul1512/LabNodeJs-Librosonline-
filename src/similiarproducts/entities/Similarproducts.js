import { sequelize } from "../../db/db.config.js";
import { Sequelize } from "sequelize";

export const SimilarProducts = sequelize.define('similarproducts', {
    SimilarID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, 
  {
    timestamps: true
  });