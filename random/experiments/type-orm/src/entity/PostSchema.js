const EntitySchema = require('typeorm');
const Post = require('./model/Post');
const Category = require('./model/Category');

module.exports = new EntitySchema({
    name: "Post",
    target: Post,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'varchar'
        },
        text: {
            type: 'text'
        }
    },
    relations: {
        categories: {
            target: 'Category',
            type: 'many-to-many',
            joinTable: true,
            cascade: true
        }
    }
})