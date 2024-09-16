import express from 'express'; 
const app = express(); 
import { sequelize } from './src/db/db.config.js'
import bodyParser from 'body-parser';
import roleRouter from './src/routes/router.js';
import categoryRouter from './src/routes/categoryRouter.js';
import loginRouter from './src/routes/loginRouter.js';
import userRouter from './src/routes/userRouter.js';
import { User } from './src/user/entities/User.entity.js'; 
import { Role } from './src/role/entities/Role.entity.js';
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', roleRouter);
app.use('/', categoryRouter);
app.use('/', loginRouter);
app.use('/', userRouter);

const PORT = 3000;

try{
    User.hasOne(Role, { foreignKey: 'RoleID' });
    Role.belongsTo(User, { foreignKey: 'RoleID' });
    //
    await sequelize.sync({ force: false });
    console.log('Connection with DB stablished');
} catch(error) {
    console.log('DB not connected', error);
}

app.listen(PORT | 3000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});