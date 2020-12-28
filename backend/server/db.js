import config from '../config/config'
import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(config.databaseConfig)

export default sequelize