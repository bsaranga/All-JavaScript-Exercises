"use strict"; //the following directive activates the modern features of Javascript over legacy features.

console.log("Hello World")

// A line break may be considered as a semi-colon and therefore the semi-colon may be omitted.

// Variable Usage

let myName = 'Buwaneka Saranga'

// Multiple variable assignments

let firstname = 'Buwaneka', lastname = 'Saranga', age = 26

console.log(firstname)
console.log(lastname)
console.log(age)

// The old way

var myNameInFull = 'Buwaneka Saranga' // the differences between let and var will be coded in a future file.

console.log(myNameInFull)

// variable assignment can be done in the following ways

let hello = 'Hello'

let message = hello + ', ' + myNameInFull

console.log(message)

/* It’s interesting to note that there exist functional programming languages, like Scala or Erlang that forbid changing variable values. In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one. Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits. Studying such a language (even if you’re not planning to use it soon) is recommended to broaden the mind. */


// Variable Naming

/* It is interesting to note that variables can be named the following format*/

let $ = 'JavaScript'
let _ = ' is awesome'

console.log($+_)

let $univs  = ['OUSL', 'SLIIT', 'SLTC', 'UOC']
let _fields = ['Real', 'Complex']

for (let index = 0; index < $univs.length; index++) {
    const element = $univs[index];
    console.log('\t'+element)
}

for (let index = 0; index < _fields.length; index++) {
    const element = _fields[index];
    console.log('\t'+element)
}

/* 
// This is considered bad practice, but works without the 'use strict' directive
num = 3.14159
console.log(num) */

// Consts are used for variables that are not meant to change, any change imposed will throw an error.
const PI = 3.14159

// PI = 2.817 // This will throw an error
console.log(PI)


// JAVASCRIPT.INFO EXERCISES

// 1. Working with Variables

/*
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let name = 'John', admin = name
console.log(admin)

// -----------------------------------------------------------------------------------------------------------------

// 2. Giving the right name 

/*
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable? 
*/

let ourPlanetName = 'Earth'
let currentVisitorName = 'John Doe'

// -----------------------------------------------------------------------------------------------------------------

// 3. Uppercase and camelcase/lowercase variable naming scenarios

/*
We would name a variable in UPPERCASE if the value of the variable is known prior to code execution and if the value
remains the same throughout the program execution.

Example: 

const BIRTHDAY = '17/02/1993' //this is a good place to use UPPERCASE variable name
const Age = ageFunc(BIRTHDAY) //Lower or camelcasing suits here because 'age' is a derived data
*/