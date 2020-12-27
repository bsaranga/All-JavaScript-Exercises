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

//connect(sql);

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

console.log(Users === sql.models.Users);

Users.sync({alter: true})
    .then(val => console.log(`Synced: ${val}`))
    .catch(err => console.log(`Not synced: ${err}`));