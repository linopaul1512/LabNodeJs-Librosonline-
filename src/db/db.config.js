import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'LibrosOnline', 'root', 'GracoSoft#00', 
{
    dialect: 'mysql',
    host: 'localhost'
});
