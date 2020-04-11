console.log(21 == '21'); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(21 === 21); // true
console.log({} === {}); // false
console.log(NaN === NaN); // false

true == {valueOf: function(){return "1"}}; // false with node.js, true with browser

var str1 = 'hi';
var str2 = 'hi';

console.log(str1 === str2); // true

var obj1 = {};
var obj2 = {};

console.log(obj1 === obj2); // false - since objects are composite objects the triple equal operator checks if the two objects are at the same memory location.
