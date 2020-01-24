/* Basic Conditionals */

if(true){
    console.log("This get's printed...")
}

let a = true, b = false

a ? console.log('A is true') : console.log('B is false')
b ? console.log('A is true') : console.log('B is false')

// Sequential ternary operators

let age = 35;
age = 16;

(age > 13 && age < 20) ? console.log("Teenageer") : (age > 20 && age < 30) ? console.log("Mid twenties") : (age > 30) ? console.log("Fully grown") : console.log("")