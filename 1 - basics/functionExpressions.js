//Function expression

//defaultGreeting(); //this will throw an error

let defaultGreeting = function(){
    console.log("Hello World");
}

defaultGreeting();

//Function declaration

function defaultGreeting2(){
    console.log("Hello World from the second function");
}

defaultGreeting = function(){
    console.log("Changed the message.");
}

defaultGreeting();

defaultGreeting2();

//Function expression with arrow functions.
let ArrowSum = (a,b) => {return a+b};

console.log(`ArrowSum = ${ArrowSum(5,6)}`);

/*
1. Declared functions can be called before they're defined.
2. Function expressions are created when the interpreter reaches that line.
*/
