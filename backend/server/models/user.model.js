const { DataTypes, Model } = require('sequelize/types')
const sequelize = require('../db')

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Name is required'
            }
        },
        set(value) {
            this.setDataValue('name', value => value.trim())
        }
    },
    email: {
        type: DataTypes.STRING(50),
        unique: {
            name: 'email',
            msg: 'Email already exists'
        },
        validate: {
            isEmail: {
                msg: 'Not a valid email'
            },
            notNull: {
                msg: 'Email is required'
            }
        }
    },
    hashed_password: {
        type: DataTypes.STRING(12),
        validate: {
            isNull: {
                msg: 'Password is required'
            }
        }
    }
},
{
    sequelize: sequelize,
})