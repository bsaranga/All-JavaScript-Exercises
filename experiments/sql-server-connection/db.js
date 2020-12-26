const fs = require('fs')
const sql = require('mssql')
const config = JSON.parse(fs.readFileSync('./config.json').toString())


let pool = new sql.ConnectionPool(config);

pool.connect().then(
    () => {
        pool.request().query('select * from dbo.Users').then(val => console.log(val))
    }
)