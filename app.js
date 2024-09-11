import express from 'express'; 
const app = express(); 
import { sequelize } from './src/db/db.config.js'
import bodyParser from 'body-parser';
import roleRouter from './src/routes/router.js';

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', roleRouter);

const PORT = 3000;

try{
    await sequelize.sync();
    console.log('Connection with DB stablished');
} catch(error) {
    console.log('DB not connected', error);
}

app.listen(PORT | 3000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});