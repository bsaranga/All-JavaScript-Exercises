import config from '../config/config'
import sequelize from './sequelize'
import app from './express'

sequelize.authenticate().then(() => {
    console.log('Database connection established successfully')
}).catch(err => console.log(`Error: ${err}`));


app.listen(config.port, err => {
    if(err) {
        console.log(`An error occurred: ${err}`)
    }
    console.log(`Server running on port ${config.port}`)
})