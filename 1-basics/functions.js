"use strict";

function space(){
    console.log("\n");
}

function outMessage(){
    let message = "Hello from within a function...";
    console.log(message);
    space();
}

outMessage();

let firstName = "Buwaneka";
let lastName = "Saranga";

let msg = "Hello there,";

function greeting(firstName, lastName, expression = "Just hello,"){
    console.log(`${expression} ${firstName} ${lastName}`);
    space();
}

greeting(firstName, lastName, msg);
greeting(firstName, lastName);

//-------------------------Global and local variable scope----------------

let thisIsAGlobalVar = "Contents of the global variable";

function printGlobalVarContents(){
    console.log(thisIsAGlobalVar);
    space();
}

function printLocalVarWithSameNameAsGlobalVar(){
    let thisIsAGlobalVar = "This is actually a local variable";
    console.log(thisIsAGlobalVar);
    space();
}

printGlobalVarContents();
printLocalVarWithSameNameAsGlobalVar();

//------------------------------------------------------------------------

function checkAge(age){
    if(age>=18){
        return true;
    }
    return false;
}

function ageResponse(booleanIn){
    return booleanIn ? "Age verified and legal" : "Age verified, but illegal";
}

console.log(ageResponse(checkAge(17)));

//---------------------------------------------------------------------------
//---------------------Other common functions--------------------------------

//Minimum function

function GiveMin(num1, num2){
    return (num1<num2) ? num1 : num2;
}

console.log(GiveMin(5,2));

//Power function

function Pow(base, exponent){
    let result = 1;
    for(let i = 0; i<exponent; i++){
        result *= base;
    }
    return result;
}

console.log(Pow(2,3));
console.log(Pow(2,4));
console.log(Pow(8,2));
console.log(Pow(5,3));
console.log(Pow(7,2));