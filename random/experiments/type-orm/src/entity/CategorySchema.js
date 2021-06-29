const EntitySchema = require('typeorm');
const Category = require('./model/Category');

module.exports = new EntitySchema({
    name: "Category",
    target: Category,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar'
        }
    }
})