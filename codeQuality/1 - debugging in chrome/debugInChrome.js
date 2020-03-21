/* let factorial = (k) => {
    if(k == 0){
        return 1;
    }else{
        return k*factorial(k - 1);
    }
}

let inFac = 4;

console.log(`Factorial(${inFac}) = ${factorial(inFac)}`); */

function hello(name) {
    let phrase = `Hello, ${name}`;

    //debugger; // <-- The debugger stops here

    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
}