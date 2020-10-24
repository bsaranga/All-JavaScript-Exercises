// Using a temporary constructor to overcome the previous problem

function Shape(){}
// augmentation
Shape.prototype.name = 'shape';
Shape.prototype.toString = function () {
    return this.name;
}

function TwoDShape() {};
// inheritance
// we define a temporary constructor function

var F = function() {};
F.prototype = Shape.prototype;

TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
// augmentation
TwoDShape.prototype.name = '2D Shape';


function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
// inheritance
var F = function() {};
F.prototype = TwoDShape.prototype;

Triangle.prototype = new F();
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

console.log(Shape.prototype);
console.log(TwoDShape.prototype);
console.log(Triangle.prototype);

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