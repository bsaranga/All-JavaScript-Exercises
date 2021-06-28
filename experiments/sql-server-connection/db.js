const fs = require('fs')
const sql = require('mssql')
const config = JSON.parse(fs.readFileSync('./config-mssql.json'))

let data;
new sql.ConnectionPool(config)
                  .connect()
                  .then(pool => {
                      return pool.query`select * from dbo.Users`
                  })
                  .then(result => console.log(result))
                  .catch(err => console.log(`An error occured ${err}`))