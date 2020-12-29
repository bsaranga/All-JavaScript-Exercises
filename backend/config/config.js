const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "imtheonewhoknocks",
    databaseConfig: {
        database: "kf-main",
        username: "bsaranga",
        password: "Complexnumbers&123",
        host: "kronoflexmain.database.windows.net",
        dialect: "mssql",
        dialectOptions: {
            options: {
                validateBulkLoadParameters: true,
                encrypt: true
            },
            connectTimeout: 1000
        },
        define: {
            freezeTableName: true
        }
    }
}

module.exports = config