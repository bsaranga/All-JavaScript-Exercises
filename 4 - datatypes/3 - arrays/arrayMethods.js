let arr = ['Jesse', 'Gus', 'Saul', 'Walter', 'Skyler'];

console.log(arr.splice(2, 1)); //removes Saul [splice method also returns the removed element]

console.log(arr);

console.log(arr.splice(1,2)); // removes two elements from 1st index

console.log(arr);

arr.splice(1, 1, 'Walter'); // removes last element and inserts 'Walter'

console.log(arr);

arr.splice(1, 0, 'Hank'); // inserts 'Hank' right after the first index, note that the delete count is 0

console.log(arr);

// Negative indices are allowed in the splice method

arr.splice(-1, 0, 'Saul', 'Pete');

console.log(arr);

console.log('-------------------------------------------------------------------------------------\n\n');

// Using slice

let arr_clone = arr.slice(); // call without arguments to create a copy

console.log(arr_clone);

console.log(arr_clone.slice(1,3));

console.log(arr_clone);

console.log('-------------------------------------------------------------------------------------\n\n');

// Using concat

let expanded_family = ['Huel', 'Bill', 'Louis'].concat(arr_clone);

console.log(expanded_family);

console.log(expanded_family.concat(['Johnny', 'Paul'], 'Anderson', [['Thomas'], ['Fring']]));

expanded_family.concat('Gus', 'Tom');

console.log(expanded_family); // the concat operation returns a new array that must be assigned to a new variable, it doesn't mutate the array in place.

// Using the find method
console.log('-------------------------------------------------------------------------------------\n\n');

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "Paul"},
    {id: 5, name: "Anderson"},
    {id: 6, name: "Fring"}
];

let user_found = users.find(item => item.id == 3);

console.log(user_found);

let users2 =  [
    {id: 1, name: "John", isAdmin: true},
    {id: 2, name: "Pete", isAdmin: false},
    {id: 3, name: "Mary", isAdmin: true},
    {id: 4, name: "Paul", isAdmin: false},
    {id: 5, name: "Anderson", isAdmin: true},
    {id: 6, name: "Paul", isAdmin: false}
];

user_found = users2.find(item => (item.name == 'Paul' && item.isAdmin == false));

console.log(user_found); // finds the first element matching the specified constraint and returns it

// Using filter in contrast to find

let users_found = users2.filter(item => (item.name == 'Paul' && item.isAdmin == false));
// ^ returns an array of objects matching the constraint provided
console.log(users_found);

users_found = users2.filter( function(item, index){
    return ((item.name == 'Paul' || item.name == 'Mary') && index == 2);
})

console.log('New print: ');
console.log(users_found);