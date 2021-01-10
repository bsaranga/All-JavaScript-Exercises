const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "imtheonewhoknocks",
    databaseConfig: {
        database: "Kronoflex",
        username: "SA",
        password: "Complexnumbers&123",
        host: "localhost",
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

export default config