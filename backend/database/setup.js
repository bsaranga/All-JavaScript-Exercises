const sequelize = require('../server/sequelize');

async function seed() {
    
    console.log('Seeding data to the database');
    await sequelize.sync({force: true})

    await sequelize.models.User.create({
        name: "Saranga",
        email: "bsaranga@gmail.com",
        hashed_password: "mynameiskhan"
    })

    console.log('Database seeded');
}

seed();