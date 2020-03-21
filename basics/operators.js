'use strict';

/* Unary and Binary Operator */

// '-' is the unary numeric negation operator

let number_1 = 1;

console.log(-number_1); //prints the numeric negation of the above variable

// '+' is a binary operation that is overloaded for string concatenation if either operand is a strings

console.log('3' + 4) //prints 34
console.log(2 + 2 + '5') //prints 45
console.log('2'+'2') //prints 22

// string concatenation is a special overloaded function of the plus operator, but other operators work with strings as numbers

console.log('2'-5) //prints -3
console.log('6'/'3') //prints 2

let stringRepresentationOfANumber = '25';

console.log(typeof(stringRepresentationOfANumber)); //prints string

console.log(typeof(+stringRepresentationOfANumber)); //prints number

/* Using the + operator adjacent to a string on the left will convert it to a Number data type, rather than using the
Number() type conversion function */

// + operator can convert non-numbers to numbers in the following way

console.log(typeof(+''), +'') //prints number, and zero
console.log(typeof(+'321'), +'321') //prints number, and 321
console.log(typeof(+true), +true) //prints number, and 1
console.log(typeof(+false), +false) //prints number, and 0

// The unary plus has good applications in converting html form values to numbers

let formFieldA = '342'
let formFieldB = '221'

console.log(+formFieldA + +formFieldB) //this prints 563
console.log(Number(formFieldA) + Number(formFieldB)) //the above is more succint than this method

// Precedence

console.log(-+'3')
console.log(+-'3') // both converts the string 3 into minus three, since unary plus has higher precedence

/* Since the (=) assignment operator has such a low precedence it can be used to chain assignments */

let a, b, c; // declaration
a = b = c = 3*2-1+6/2

console.log(a) // prints 8
console.log(b) // prints 8
console.log(c) // prints 8

// The assignment operator (=) returns a value, study the example below

let d = 1
let e = 2
let f = 3 - (d = e + 1) // the assignment operator evaluates the expression to 3 and assigns it to variable d, and the remaining expression is futher evaluated

console.log(f) // prints zero

// Modulo, Exponentiation, Increment, and Decrement operators

console.log(5%2) //prints 1
console.log(2**3) //prints 8

let valueToBeIncremented = 2
let valueToBeDecremented = 4

console.log(++valueToBeIncremented) // prints 3
console.log(valueToBeIncremented++) // prints 3 even though the value has been incremented to 4
console.log(valueToBeIncremented) // prints 4 here because the value was incremented in the previous line

console.log(--valueToBeDecremented) // prints 3
console.log(valueToBeDecremented--) // prints 3 even though the value has been decremented to 2
console.log(valueToBeDecremented) // prints 2 here because the value was decremented in the previous line

console.log(true + false) // prints 1
console.log(null + 1) // prints 1