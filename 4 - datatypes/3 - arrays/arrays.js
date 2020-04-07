// Syntaxes of creating arrays

let arr1 = new Array();
let arr2 = []; // this is the most commonly used method

let fruits = ["apples", "oranges", "bananas"];

fruits.forEach(e => {
    console.log(e);
})

console.log(`Length: ${fruits.length}`);

console.log('\n------------------------------------------------------------------------------------------\n');

// We can store elements of any type

let arr3 = ['A string', 4, {name: 'Saranga'}, true, function (){console.log('hello world');}];

arr3[4](); // execution of the function in the array

console.log(arr3);

console.log('\n------------------------------------------------------------------------------------------\n');

// Queues - PUSH & SHIFT

let queue1 = ['Pinkman', 'Huel', 'Goodman', 'White'];

console.log(queue1);

// pushing elements
['Dara', 'Fring', 'Pete'].forEach(el => {
    queue1.push(el);
})

console.log(queue1);

// shifting elements

queue1.shift(); // removes the first element and returns it, in this case we're not assigning it any variable

queue1.push(queue1.shift()); //removing the first element and placing it at the back

console.log(queue1);

queue1.forEach(el => {
    queue1.push(queue1.shift());
    console.log(queue1);
})

console.log('\n------------------------------------------------------------------------------------------\n');

// Stack - PUSH & POP

let stack1 = ['Jesse', 'Gus', 'Saul', 'Walter', 'Skyler'];

for (let index = 0; index < stack1.length; index++) {
    let fe = stack1[0];
    stack1[0] = stack1.pop();
    stack1.push(fe);

    console.log(stack1);
}

console.log('\n------------------------------------------------------------------------------------------\n');

// Same operation as above using unshift

for (let index = 0; index < stack1.length; index++) {
    stack1.unshift(stack1.pop());

    console.log(stack1);
}

/*
Please think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you actually require a regular object {}.
*/

// Methods push/pop run fast, while shift/unshift are slow.

// Creating empty arrays with lengths

let arrOfSize_5 = new Array(5);

// toString

console.log(stack1.toString()); // prints comma seperated elements

