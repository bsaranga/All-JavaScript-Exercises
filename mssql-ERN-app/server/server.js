const c = require('../config/colors')
const config = require('../config/config')
const sequelize = require('./sequelize')
const app = require('./express')

sequelize.authenticate().then(() => {
    console.log('Database connection established successfully')
}).catch(err => console.log(c.bRed, `Error: ${err}`));


app.listen(config.port, err => {
    if(err) {
        console.log(c.bRed, `An error occurred: ${err}`)
    }
    console.log(c.bGreen, `Server running on port ${config.port}`)
})