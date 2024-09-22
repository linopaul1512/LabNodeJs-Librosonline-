import express from 'express'; 
const app = express(); 
import { sequelize } from './src/db/db.config.js'
import bodyParser from 'body-parser';
import roleRouter from './src/routes/routerrole.js';
import typeRouter from './src/routes/routertype.js';
import authorRouter from './src/routes/routerauthor.js'
import intercatRouter from './src/routes/routerintercat.js';
import intersimRouter from './src/routes/routerintersim.js';
import intertypeRouter from './src/routes/routerintertype.js';
import userRouter from './src/routes/userRouter.js';
import similarRouter from './src/routes/routersimilar.js';
import consultRouter from './src/routes/routerconsult.js';
import categoryRouter from './src/routes/categoryRouter.js';
import loginRouter from './src/routes/loginRouter.js';
import publicatinRouter from './src/routes/routerpublication.js';
import { InterType } from './src/intertypes/entities/InterType.entities.js';
import { Typebooks } from './src/typebooks/entities/Typebooks.entities.js';
import { InterCategory } from './src/intercategory/entities/intercategory.entity.js';
import { User } from './src/user/entities/User.entity.js'; 
import { Role } from './src/role/entities/Role.entity.js';
import { Category } from './src/category/entities/Category.entity.js';
import { Publication } from './src/publication/entities/Publication.entities.js';
import { SimilarProducts } from './src/similiarproducts/entities/Similarproducts.js';
import { InterSimilar } from './src/intersimilar/entities/Intersimilar.entity.js';
import { Author } from './src/author/entities/Author.entity.js';
import { Consults } from './src/consults/entities/Consults.entities.js';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', roleRouter);
app.use('/', typeRouter);
app.use('/', authorRouter);
app.use('/', intercatRouter);
app.use('/', intersimRouter);
app.use('/', intertypeRouter);
app.use('/',userRouter);
app.use('/',similarRouter);
app.use('/',consultRouter);
app.use('/',publicatinRouter);
app.use('/', categoryRouter);
app.use('/', loginRouter);
app.use('/', userRouter);

const PORT = 3000;


try{

    //roleacion de rol con usuario
    User.hasOne(Role, { foreignKey: 'RoleID' });
    Role.belongsTo(User, { foreignKey: 'RoleID' });
    
    //relaciones de categoría con intermedia
    InterCategory.hasOne(Category, { foreignKey: 'CategoryID' }); 
    Category.belongsTo(InterCategory, { foreignKey: 'CategoryID' });

    Publication.hasMany(InterCategory, { foreignKey: 'PublicationID' });
    InterCategory.belongsTo(Publication, { foreignKey: 'PublicationID' });
    
    //relaciones de tipo libro
    Typebooks.hasOne(InterType, { foreignKey: 'TypeID' }); 
    InterType.belongsTo(Typebooks, { foreignKey: 'TypeID' });

    Publication.hasOne(InterType, { foreignKey: 'TypeID' }); 
    InterType.belongsTo(Publication, { foreignKey: 'TypeID' });

    //relaciones de productos similares
    SimilarProducts.hasOne(InterSimilar, { foreignKey: 'SimilarID' }); 
    InterSimilar.belongsTo(SimilarProducts, { foreignKey: 'SimilarID' });

    Publication.hasOne(InterType, { foreignKey: 'SimilarID' }); 
    InterType.belongsTo(Publication, { foreignKey: 'SimilarID' });

    //relaciones de autor con publicacion
    Author.hasMany(Publication, { foreignKey: 'AuthorID' }); 
    Publication.belongsTo(Author, { foreignKey: 'AuthorID' });

    //relaciones de consultas y publicacion
    Publication.hasMany(Consults, { foreignKey: 'PublicationID' });
    Consults.belongsTo(Publication, { foreignKey: 'PublicationID' });

    //relaciones de consultas y usuario
    User.hasMany(Consults, { foreignKey: 'UserID' });
    Consults.belongsTo(User, { foreignKey: 'UserID' });
    
    //relaciones de intersimilar y publicacion
    Publication.hasMany(InterSimilar, { foreignKey: 'PublicationID' });
    InterSimilar.belongsTo(Publication, { foreignKey: 'PublicationID' });

    //relaciones de usuario y publicacion
    Publication.hasOne(User, { foreignKey: 'UserID' }); 
    User.belongsTo(Publication, { foreignKey: 'UserID' });

    //relaciones de usuario y productos similares
    User.hasMany(SimilarProducts, { foreignKey: 'UserID' }); 
    SimilarProducts.belongsTo(User, { foreignKey: 'UserID' });
    
    
    //await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection with DB stablished'); 
  } catch(error) { 
    console.log('DB not connected', error); 
  }
  
  
  app.listen(PORT | 3000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
  });
