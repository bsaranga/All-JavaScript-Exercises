// All objects in JS are instances of 'Object', which is the head of the prototype chain.

var myObject = new Object();

/**
 * Each object has a private property which holds a link
 * to another object called its prototype.
 * 
 * That prototype has its own prototype, and the chain
 * continues until we hit null. Null has no prototype.
 */

console.log(myObject.__proto__.__proto__); // end of prototype chain for an object.

// Further example

let f = function () {
    this.a = 1;
    this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log(o); // f {a: 1, b: 2}
console.log(o.__proto__); // f {b: 3, c: 4}
console.log(o.__proto__.__proto__); // {}
console.log(o.__proto__.__proto__.__proto__); // null

// Prototype shadowing - where ownProperty shadows the prototype property.

console.log(o.b); // prints 2, because it sits on top of the prototype chain, i.e: shadows the prototype prop.

console.log(o.c); // 'c' is not an ownProperty, so the prototype is checked, and finds c, prints 4.
console.log(o.hasOwnProperty('c')); // returns false
console.log(o.__proto__.hasOwnProperty('c')); // returns true

console.log(o.d); // traverses the prototype chain until 'null' is encountered and returns undefined.

console.log('\n--------------------------------------\n');

function doSomething(){}
console.log(doSomething.prototype);

var doesSomething = function(){};
console.log(doesSomething.prototype.constructor);

var doesArrow = () => {};
console.log(doesArrow.prototype); // arrow functions do not have a prototype