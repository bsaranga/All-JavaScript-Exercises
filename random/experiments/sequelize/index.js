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

/*
const newUser = Users.build({
    first_name: "Saranga",
    last_name: "Buwaneka",
    email: "bsaranga@gmail.com",
    user_name: "bsaranga",
    "password": "sdjfhsd98678"
})
*/

async function saveInstance(modelInstance) {
    await modelInstance.save();
    console.log(`${modelInstance} was saved to db`);
}

async function updateInstance(modelInstance, prop, val) {
    modelInstance[prop] = val;
    await modelInstance.save();
    console.log(`Instance updated`);
}

//saveInstance(newUser);
//updateInstance(newUser, 'first_name', 'Jamis');

// Create new user

async function createNewUser(attr) {
    await Users.create(attr);
    console.log('User added to DB');
}

// Insertions using above function

/*

createNewUser({
    first_name: "Sandalika",
    last_name: "Madhumathi",
    email: "sandy@gmail.com",
    user_name: "sandy",
    "password": "ds9873yhw3e"
});

createNewUser({
    first_name: "Logan",
    last_name: "Paul",
    email: "lpaul@gmail.com",
    user_name: "paulLogan",
    "password": "654ds6s5f3"
});

createNewUser({
    first_name: "Jimi",
    last_name: "Hendrix",
    email: "jhendrix@gmail.com",
    user_name: "hendrixJKAY",
    "password": "lkjhds87^#*&"
});

createNewUser({
    first_name: "Peter",
    last_name: "Pan",
    email: "ppan@gmail.com",
    user_name: "ppan247",
    "password": "9*7938yh"
});

*/

async function getAllUsers(model){ 
    const result = await model.findAll();
    console.log(JSON.stringify(result, null, 2));
}

//getAllUsers(Users);

async function getAllUsersWith(attr, model) {
    const result = await model.findAll({
        attributes: attr
    });
    console.log(JSON.stringify(result, null, 2));   
}

//getAllUsersWith(['id', 'user_name', 'email'], Users);