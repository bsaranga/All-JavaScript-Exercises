'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

for (const key in cat) {
    display(key);
}

display(Object.keys(cat));

Object.defineProperty(cat, 'name', {enumerable: false}); // name won't show up in enumeration.

for (const key in cat) {
    display(key);
}

display(Object.keys(cat));