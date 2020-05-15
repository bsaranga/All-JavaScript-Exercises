// Prototype chaining - inheritance chaining through the prototype

function Shape() {
    this.name = 'Shape';
    this.toString = function() {
        return this.name;
    }
}

function TwoDShape() {
    this.name = '2D Shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height / 2;
    }
}

// This is how the inheritance chain is setup
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

// Note the constructors of the following functions point
// to the constructor of Shape. Therefore they must
// be reset.
console.log(TwoDShape.prototype.constructor); // returns [Function: Shape]
console.log(Triangle.prototype.constructor); // returns [Function: Shape]

// Resetting the constructor
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

// Creating a triangle object

var myTriangle = new Triangle(5, 8);

console.log(myTriangle.getArea());
console.log(myTriangle.toString()); // an inherited method; the 'this' object is bound to the 'myTriangle' object.

console.log(myTriangle.constructor); // this prints the proper constructor because we resetted it.

// Using the 'instanceof' operator

console.log(myTriangle instanceof Shape && myTriangle instanceof TwoDShape && myTriangle instanceof Triangle); // returns true

console.log('\n----------------inheritance--chain--------------------\n');

console.log(myTriangle.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__.__proto__.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__.__proto__.__proto__.__proto__);