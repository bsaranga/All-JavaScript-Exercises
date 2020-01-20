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

