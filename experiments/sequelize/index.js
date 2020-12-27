const fs = require('fs');
const {Sequelize, Model, DataTypes} = require('sequelize');

const config = JSON.parse(fs.readFileSync('config.json'))
const sql = new Sequelize(config);

async function connect(conn) {
    try {
        await conn.authenticate();
        console.log('Connection established')
    } catch (err) {
        console.log(`Not connected: ${err}`)
    }
}

class Users extends Model {};

Users.init({
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        defaultValue: 'null',
        type: DataTypes.STRING(50),
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    sequelize: sql,
    modelName: 'Users',
    timestamps: false
})


const newUser = Users.build({
    first_name: "Saranga",
    last_name: "Buwaneka",
    email: "bsaranga@gmail.com",
    user_name: "bsaranga",
    "password": "sdjfhsd98678"
})

async function saveInstance(modelInstance) {
    await modelInstance.save();
    console.log(`${modelInstance} was saved to db`);
}

saveInstance(newUser);