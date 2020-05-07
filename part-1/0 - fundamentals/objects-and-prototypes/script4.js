'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {configurable: false});

//Object.defineProperty(cat, 'name', {enumerable: false}); // this throws an error

// Neither can you make the property configurable again

//Object.defineProperty(cat, 'name', {configurable: true});

// However the writable attribute can be changed

//Object.defineProperty(cat, 'name', {writable: false});

delete cat.name // throws an error