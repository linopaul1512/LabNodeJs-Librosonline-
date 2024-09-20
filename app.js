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
import { InterType } from './src/intertypes/entities/InterType.entity.js';
import { Typebooks } from './src/typebooks/entities/Typebooks.entity.js';
import { Category } from './src/category/entities/Category.entity.js';
import { InterCategory } from './src/intercategory/entities/intercategory.entity.js';
import { User } from './src/user/entities/User.entity.js'; 
import { Role } from './src/role/entities/Role.entity.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './docs/swagger.js'; 

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//Api routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Role router
app.use('/', roleRouter);

//Book type router
app.use('/', typeRouter);

//Author router
app.use('/', authorRouter);

//Intercategory router
app.use('/', intercatRouter);

//Intersimilar router
app.use('/', intersimRouter);

//Intertype router
app.use('/', intertypeRouter);

//User router
app.use('/', userRouter);

//Similar products router
app.use('/',similarRouter);

//Consults router
app.use('/',consultRouter);

//Publication router
app.use('/',publicatinRouter);

//Category router
app.use('/', categoryRouter);

//Login router
app.use('/', loginRouter);

const PORT = 3000;

try{

//    User.hasMany(Post, { foreignKey: 'userId' }); 
//    Post.belongsTo(User, { foreignKey: 'userId' });
  
    User.hasOne(Role, { foreignKey: 'RoleID' });
    Role.belongsTo(User, { foreignKey: 'RoleID' });
    
    Category.hasOne(InterCategory, { foreignKey: 'CategoryID' }); 
    InterCategory.belongsTo(Category, { foreignKey: 'CategoryID' });
    
    Typebooks.hasOne(InterType, { foreignKey: 'TypeID' }); 
    InterType.belongsTo(Typebooks, { foreignKey: 'TypeID' });


    //await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection with DB stablished'); 
  } catch(error) { 
  console.log('DB not connected', error); 
}
  
app.listen(PORT | 3000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
  });