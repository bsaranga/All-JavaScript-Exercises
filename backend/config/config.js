const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "Your_secret_key",
    databaseConfig: {
        database: "kf-main",
        username: "bsaranga",
        password: "Complexnumbers&123",
        host: "kronoflexmain.database.windows.net",
        dialect: "mssql",
        options: {
        validateBulkLoadParameters: true,
        encrypt: true
        },
        dialectOptions: {
            connectTimeout: 1000
        },
        define: {
            freezeTableName: true
        }
    }
}

module.exports = config