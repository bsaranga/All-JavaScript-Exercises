//Arrow Functions

let mult = (arg1, arg2) => arg1 * arg2; //there's no return keyword

console.log(mult(5,2)); //prints 10

//The longer version of the above syntax is this...

let multLonger = function (arg1, arg2){
    return arg1 * arg2;
}

console.log(multLonger(5,3)); //prints 15

//Single argument arrow function

let squareFunc = n => n*n;

console.log(squareFunc(5));

//If there are no arguments, empty parenthesis should be present

let sayHi = () => console.log("Hi world");

sayHi();

//Console input, output (nodejs)

/*
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userName;
let countryName;
*/

/* r1.question("What is your name?", function(userName){
    r1.question("Where do you live?", function(countryName){
        console.log(`${userName}, is a citizen of ${countryName}`);
        r1.close();
    });
}); */

//using arrow functions

/* r1.question("What's your second name? ", (secondName) => {
    r1.question("What is your age? ", (age) => {
        console.log(`Second name is ${secondName}, and the age is ${age}`);
        r1.close();
    });
});
 */


//Multi-line arrow functions

/*
If curly braces are open after the arrow function, an explicit return statement is needed
*/

let sum = (a,b) => {
    a+b;
}

console.log(sum(5,4)); //returns undefined

let properSum = (a,b) => a+b;

console.log(properSum(5,4)); //returns 9

//So curly braces provide us a way to write multi-line arrow functions

let factorial = (n) => {
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

console.log(factorial(5));