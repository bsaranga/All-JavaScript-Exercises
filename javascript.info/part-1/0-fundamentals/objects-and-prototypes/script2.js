'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

display(Object.getOwnPropertyDescriptor(cat, 'name'));

// changing object properties

Object.defineProperty(cat, 'name', {writable: false}) // only the name property is read-only
Object.freeze(cat.name) // entire name object is read-only

cat.name.first = 'Rusty';
