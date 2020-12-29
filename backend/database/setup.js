const sequelize = require('../server/sequelize');

async function seed() {
    
    console.log('Seeding data to the database');
    await sequelize.sync({force: true})

    await sequelize.models.User.bulkCreate([
        {
            name: "Saranga",
            email: "bsaranga@gmail.com",
            hashed_password: "mynameiskhan"
        },
        {
            name: "Sandy",
            email: "sandyvcinity@gmail.com",
            hashed_password: "latetoparty@07"
        },
        {
            name: "Saranga",
            email: "jkrwoling@gmail.com",
            hashed_password: "mynameisabsolutelynotkhan"
        },
    ])

    console.log('Database seeded');
}

//seed();