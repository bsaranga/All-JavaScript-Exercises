// Inheriting the prototype only
// Following from the previous code, we have added reusable properties and methods
// on to the prototype, therefore, we can inherit just the prototype only
// without creating a new object, specifically for inheritance.

// This will have less number of lookups when it comes to searching down the prototype chain

function Shape(){}
// augmentation
Shape.prototype.name = 'shape';
Shape.prototype.toString = function () {
    return this.name;
}

function TwoDShape() {};
// inheritance
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
// augmentation
TwoDShape.prototype.name = '2D Shape';


function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
// inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// augmentation
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2;
}

// Test code from the previous file

// Creating a triangle object

var myTriangle = new Triangle(5, 8);

console.log(myTriangle.getArea());
console.log(myTriangle.toString()); // an inherited method; the 'this' object is bound to the 'myTriangle' object.

console.log(myTriangle.constructor); // this prints the proper constructor because we resetted it.

// Using the 'instanceof' operator

console.log(myTriangle instanceof Shape && myTriangle instanceof TwoDShape && myTriangle instanceof Triangle); // returns true

// This has an unintended side effect though. All the children and parents point to the same
// object, when a child modifies the prototype, the parents get the changes.

console.log(TwoDShape.prototype); // parents have been populated with children's props
console.log(Shape.prototype); // parents have been populated with children's props

console.log('\n----------------inheritance--chain--------------------\n');

console.log(myTriangle.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__);
console.log(`      *      \n      |      \n      |      \n      |      `);
console.log(myTriangle.__proto__.__proto__.__proto__);

console.log('We have messed up the inheritance chain');