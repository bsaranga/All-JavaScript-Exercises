const { DataTypes, Model } = require('sequelize')
const crypto = require('crypto');
const { set } = require('../sequelize');

class User extends Model {

    static makeSalt() {
        return Math.round(new Date().valueOf() * Math.random())
    }

    encryptPassword(password, salt) {
        if(!password) return ''
        try {
            return crypto
                .createHmac('sha1', salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            console.log(`Hashing Error: ${err}`);
            return 'ERROR OCCURED WHILE HASHING'
        }
    }
}

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
            salt: {
                type: DataTypes.STRING(),
                defaultValue: User.makeSalt()
            },
            hashed_password: {
                type: DataTypes.STRING(),
                set(value){
                    const salt = this.getDataValue('salt').toString();
                    this.setDataValue('hashed_password', this.encryptPassword(value, salt))
                },
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