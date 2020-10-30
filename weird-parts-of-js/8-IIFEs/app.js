// IIFEs or Immediately Invoked Function Expressions

var greeting = function(name){
    return `Hello ${name}`;
}('Saranga');

console.log(greeting);

// By immediately invoking the function expression, we assign the return value to the variable greeting. The function definition is not assigned to the greeting variable as in the case of function expressions.

(function (){
    this.greeting = "Modded";
}()); // Invocation can be done inside the paranthesis or outside the parenthesis.

console.log(greeting);