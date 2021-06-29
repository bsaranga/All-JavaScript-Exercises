// Anonymous functions aren't hoisted
/*
anonymousGreet();

var anonymousGreet = function(){
    console.log("Hello");
}
*/

// First Class Functions

/* 

function log(a){
    a();
};

// Creating a function on the fly
log(function(){
    console.log("Hi");
}); 

*/

// Passing by value vs passing by reference

// Passing by value

var a = 3;

var b = a //assigning a to b

console.log(b); // outputs 3, the value of a that was assigned to b

a = 4;
console.log(a);
console.log(b); // b is still 3, because it doesn't have a reference to 'a', only a copy of its value was assigned

// Passing by reference

var objA = {name:"Saranga"};
var objB = objA;

objA.name = "Bob";

console.log(objB.name); // outputs Bob, because a reference to objA was assigned to objB