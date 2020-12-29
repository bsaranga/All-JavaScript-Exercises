const { DataTypes, Model } = require('sequelize')

class User extends Model {}

module.exports = (sequelize) => {
    User.init(
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Name is required'
                    }
                },
                set(value) {
                    this.setDataValue('name', value.trim())
                }
            },
            email: {
                type: DataTypes.STRING(50),
                unique: {
                    name: 'email',
                    msg: 'Email already exists'
                },
                allowNull: false,
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
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Password is required'
                    }
                }
            }
        },
        {
            sequelize: sequelize,
        }
    )
}