import config from '../config/config'
import { Sequelize } from 'sequelize'
import user from './models/user.model'

const sequelize = new Sequelize(config.databaseConfig)

// create model
async function createModel(model, sqlConn) {
    await model(sqlConn);
    console.log('Model(s) created');
}

createModel(user, sequelize);

export default sequelize