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

console.log('1-------------------------------------------------------------------------------------\n\n');

// Using slice

let arr_clone = arr.slice(); // call without arguments to create a copy

console.log(arr_clone);

console.log(arr_clone.slice(1,3));

console.log(arr_clone);

console.log('2-------------------------------------------------------------------------------------\n\n');

// Using concat

let expanded_family = ['Huel', 'Bill', 'Louis'].concat(arr_clone);

console.log(expanded_family);

console.log(expanded_family.concat(['Johnny', 'Paul'], 'Anderson', [['Thomas'], ['Fring']]));

expanded_family.concat('Gus', 'Tom');

console.log(expanded_family); // the concat operation returns a new array that must be assigned to a new variable, it doesn't mutate the array in place.

// Using the find method
console.log('3-------------------------------------------------------------------------------------\n\n');

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

console.log('4-------------------------------------------------------------------------------------\n\n');

// Using the map function to transform array elements

let lotr_char = ["Bilbo", "Gandalf", "Nazgul"];

let lotr_char_len = lotr_char.map(item => item.length);

lotr_char_len = lotr_char.map(function (item, index, arr) { return item.toUpperCase()+'_'+index.toString()+'_'+arr[index].toString()});

console.log(lotr_char_len);

// Sorting numeric arrays

let num_arr = [12,2,3,7,6,4,9,1,5];

num_arr.sort((a,b) => a - b);

console.log(num_arr);

num_arr.sort((a,b) => b - a);

console.log(num_arr);

console.log('5-------------------------------------------------------------------------------------\n\n');

// Reverse elements

lotr_char.reverse();

console.log(lotr_char);

console.log('6-------------------------------------------------------------------------------------\n\n');

// Splitting a string into array using a delimiter

let lotrString = 'Bilbo, Gandalf, Nazgul, Saruman';

let lotrGenArr = lotrString.split(', ');

lotrGenArr.forEach(e => console.log(e));

let str_0 = 'helloworld';

let str_0_letters = str_0.split('');

str_0_letters.forEach(e => console.log(e));

console.log('7-------------------------------------------------------------------------------------\n\n');

// Array join to string - the opposite of split

let str_1 = lotr_char.join(', ');
console.log(str_1);

// Mapping onto the same array

let arr_mapTest = ["Bilbo", "Gandalf", "Nazgul"];

arr_mapTest = arr_mapTest.map(item => item.toUpperCase());

console.log(arr_mapTest);

console.log('8-------------------------------------------------------------------------------------\n\n');

// Using reduce

function multiplier(arr){
    return arr.reduce((fac, item) => {
        return fac * item;
    }, 1);
}

console.log(multiplier([5,4,3,2,1]));

function adder(arr){
    return arr.reduce((sum, item) => sum + item, 0);
}

console.log(adder([5,4,3,2,1,-1]));

// Distinguishing arrays

console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray([1,2,3]));

// Use of 'thisArg' in array methods

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users_army = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // find users, for who army.canJoin returns true
  let soldiers = users_army.filter(army.canJoin, army);

console.log(soldiers);

console.log('9-------------------------------------------------------------------------------------\n\n');

// Camelize string

function camelize(str){
    return str
            .split('-')
            .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
}

console.log(camelize('-web-kit-anim'));

// Filter range

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

console.log(filterRange([5,3,2,1,6,9,8,7], 0, 3));

// Filter range in place

function filterRangeInPlace(arr, a, b) {
    
}