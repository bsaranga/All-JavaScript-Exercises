const config = require('../config/config')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(config.databaseConfig)

module.exports = sequelize