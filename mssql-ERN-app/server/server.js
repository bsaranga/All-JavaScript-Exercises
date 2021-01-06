const config = require('../config/config')
const sequelize = require('./sequelize')
const app = require('./express')

sequelize.authenticate().then(() => {
    console.log('Database connection established successfully')
}).catch(err => console.log(`Error: ${err}`));


app.listen(config.port, err => {
    if(err) {
        console.log(`An error occurred: ${err}`)
    }
    console.log(`Server running on port ${config.port}`)
})