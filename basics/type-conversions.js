'use strict';

// Coversion to string data type

let aBoolean = true
let aBoolean_string = String(aBoolean)
let undefinedVariable;
let undefinedVariable_string = String(undefinedVariable)
let aNulledVar = null
let aNulledVar_string = String(aNulledVar)

console.log(typeof(aBoolean))
console.log(typeof(aBoolean_string))

console.log(typeof(undefinedVariable))
console.log(typeof(undefinedVariable_string))

console.log(typeof(aNulledVar))
console.log(typeof(aNulledVar_string))

// ----------------------------------------------------------------------------------------------------------

// Numeric conversions

let result = '6' / '2' //implicit numeric conversion
console.log(result)

let Pi = '3.14159'
console.log(`Pi = ${Pi}`)
console.log(`Before conversion: ${typeof(Pi)}`)
Pi = Number(Pi)
console.log(`After conversion: ${typeof(Pi)}`)

aNulledVar = Number(aNulledVar)
console.log(`Converting a null variable to a number returns ${aNulledVar}`)

undefinedVariable = Number(undefinedVariable)
console.log(`Converting an undefined variable to a number returns ${undefinedVariable}`)

// ----------------------------------------------------------------------------------------------------------

// Boolean conversions

let undefined2;
console.log(`Before conversion: ${undefined2}`)
undefined2 = Boolean(undefined2)
console.log(`After conversion ${undefined2}`)

let null2 = null;
console.log(`Before conversion: ${null2}`)
null2 = Boolean(null2)
console.log(`After conversion ${null2}`)

let emptyString = ''
console.log(`Before conversion: ${emptyString}`)
emptyString = Boolean(emptyString)
console.log(`After conversion ${emptyString}`)

let nonEmptyString = 'sdfhkjsdhfk'
console.log(`Before conversion: ${nonEmptyString}`)
nonEmptyString = Boolean(nonEmptyString)
console.log(`After conversion ${nonEmptyString}`)

let stringZero = '0'
console.log(`Before conversion: ${stringZero}`)
stringZero = Boolean(stringZero)
console.log(`After conversion ${stringZero}`)


