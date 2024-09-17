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
import userRouter from './src/routes/routeruser.js';
import similarRouter from './src/routes/routersimilar.js';
import consultRouter from './src/routes/routerconsult.js';
import publicatinRouter from './src/routes/routerpublication.js';
import { InterType } from './src/intertypes/entities/InterType.entities.js';
import { Typebooks } from './src/typebooks/entities/Typebooks.entities.js';
import { InterCategory } from './src/intercategory/entities/intercategory.entity.js';


//
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

const PORT = 3000;


try{

//    User.hasMany(Post, { foreignKey: 'userId' }); 
//    Post.belongsTo(User, { foreignKey: 'userId' });
    
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
