'use strict';

//NUMBER

//the infinity data-type is shown below

let inf = Infinity

console.log(1/inf) //this returns zero
console.log(1/0) //this returns 'Infinity'
console.log(-1/0) //this returns 'Negative Infinity'

console.log('foo'/3) //this returns NaN as a result of a computational error, NaN stands for "Not a Number"

console.log(typeof(5)) //returns 'Number' as the data-type
console.log(typeof(NaN)) //returns 'Number' as the data-type, these are specified as "Special Numeric Value"
console.log(typeof(Infinity)) //returns 'Number' as the data-type, these are specified as "Special Numeric Value"

const arbitrarilyLargeNumber = 893478326487364983294003984639756489273598437587364908732946238736480293472037597438956923085074n;
//the 'n' at the end of the number specifies that is of type BigInt

console.log(arbitrarilyLargeNumber)
console.log(typeof(arbitrarilyLargeNumber))

//---------------------------------------------------------------------------------------------------------------------

// STRINGS

// In addition to the double quote and single quote enclosed strings, the back-tick string is a new feature in JS

let openingWord = 'Hello'
let fullName = 'Buwaneka Saranga'
let message = 'How are you?'
let greeting = `${openingWord} ${fullName}, ${message}`

console.log(greeting)

console.log(typeof(greeting))

//---------------------------------------------------------------------------------------------------------------------

// BOOLEAN

let randomBool = 4 > 5
let anotherRandomBool = 5 !== 5

console.log(randomBool)
console.log(anotherRandomBool)

console.log(typeof(randomBool))
console.log(typeof(anotherRandomBool))

//---------------------------------------------------------------------------------------------------------------------

// NULL and UNDEFINED

let age = null //null is a special value with the meaning of 'nothingness' or 'emptiness'
console.log(typeof(age)) //returns object, this is a known error of the 'typeof' function, actually, the type of null is null, it is a special data-type
console.log(age)

// Nulls are primarily used to denote a variable which is unknown or empty for some reason

// Althought the type 'undefined' can be assigned to a variable, it is considered bad practice and a gateway to a myriad of bugs

let $js;

console.log($js)
console.log(typeof($js))

// As seen above a variable without an assignment holds the value 'undefined' by default, therefore it can be used as a means to check for variable which are un-assigned