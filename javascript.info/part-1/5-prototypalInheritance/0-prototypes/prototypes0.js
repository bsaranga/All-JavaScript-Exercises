
function foo(a,b) {
    this.a = a;
    this.b = b;
};

console.log(foo.prototype);
console.log(typeof(foo.prototype)); // returns object

/**
 * Prototype is a property that gets created as soon as you define a function.
 * Its initial value is an empty object.
 * 
 * This empty object can be filled with properties and methods, they won't
 * have an effect on the foo function itself, they will be used when
 * foo() is used as a constructor.
 */

 foo.prototype.funcName = "adder";
 foo.prototype.add = function () {
     return this.a + this.b;
 }

 console.log(foo.funcName); // returns undefined
 console.log(foo.add); // returns undefined

 var fooObj = new foo(3,5);
 console.log(fooObj);
 console.log(fooObj.funcName); // obtains from the prototype
 console.log(fooObj.add()); // obtains from the prototype

 // Adding new properties to the prototype

 foo.prototype.adhoc_prop = 42;

 console.log(fooObj.adhoc_prop); // the fooObj has the newly added property because it maintains a reference to the prototype of the constructor, without copying values.
 console.log(fooObj.constructor); // returns function foo.
 
// Walking through the properties of the object
for (const key in fooObj) {
    console.log(fooObj[key], (fooObj.hasOwnProperty(key) ? 'Own, ' : 'Prototype, '), (fooObj.propertyIsEnumerable(key)) ? 'enumerable' : 'not enumerable');
}

// Using 'isPrototypeOf()'

var mammal = {
    fed: 'milk',
    breathes: 'air'
}

function Human(name) {
    this.name = name;
}
Human.prototype = mammal;

var saranga = new Human('Saranga'); // instantiation
console.log(mammal.isPrototypeOf(saranga)); // returns true
console.log(saranga.__proto__);
console.log(Human.prototype);
console.log(saranga.__proto__.__proto__.__proto__);

/**
 * __proto__ links to the prototype set by the constructor function of an object.
 * __proto__ is not the same as prototype.
 * __proto__ is a property of instances.
 * prototype is a property of contructor functions.
 * 
 * __proto__ is not supported by IE, it is advised to use it only for debugging and educational purposes
 */