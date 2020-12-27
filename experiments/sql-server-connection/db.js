const fs = require('fs')
const sql = require('mssql')
const config = JSON.parse(fs.readFileSync('./config-mssql.json'))

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

(async function() {
    await poolConnect
    try {
        const result = await pool.request().query('select * from dbo.Users')
        console.dir(result)
    } catch (error) {
        
    }
})()