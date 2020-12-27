import config from '../config/config'
import app from './express'
import {Sequelize} from 'sequelize'

const sequelize = new Sequelize(config.databaseConfig)
sequelize.authenticate().then(() => {
    console.log('Database connection established successfully')
}).catch(err => `Error: ${err}`);


app.listen(config.port, err => {
    if(err) {
        console.log(`An error occurred: ${err}`)
    }
    console.log(`Server running on port ${config.port}`)
})