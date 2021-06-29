import { DataTypes, Model } from 'sequelize'
import crypto from 'crypto'

class User extends Model {

    authenticate(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    }

    static makeSalt() {
        return Math.round(new Date().valueOf() * Math.random())
    }

    encryptPassword(password) {
        if(!password) return ''
        try {
            return crypto
                .createHmac('sha1', this.salt.toString())
                .update(password)
                .digest('hex')
        } catch (err) {
            console.log(`Hashing Error: ${err}`);
            return null;
        }
    }
}

export default (sequelize) => {
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
                    this.setDataValue('hashed_password', this.encryptPassword(value))
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