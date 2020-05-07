'use strict';

/* 
// the new keyword

// a constructor function for creating objects in js
function Cat(name, color) {
    this.name = name;
    this.color = color
}

var f_cat = new Cat('Fluffy', 'White');

display(f_cat);
display(f_cat.name);

*/

/*

// using Object.create

var cat = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable: true,
            writable: true,
            configurable: true
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            configurable: true
        }
    })

display(cat);

 */

 /*
  // ES-6 Classes

 class Cat {
     constructor(name, color) {
         this.name = name
         this.color = color
     }

     speak(){
         display('Meow')
     }
 }

 var cat = new Cat('Fluffy', 'White')

 display(cat);
 */

 