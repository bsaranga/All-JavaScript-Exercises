let user = new Object(); // object constructor syntax
let user2 = {}; // object literal syntax

let user3 = {
    name: "Saranga",
    age: 26
};

//-------------------------------------------------------------------------------------------

// Accessing the properties of an object
console.log(user3.name);
console.log(user3.age);

user.isAdmin = true; // implicit addition of a property
(user.isAdmin) ? console.log("User is admin") : console.log("User isn't admin");

//-------------------------------------------------------------------------------------------

// Removal of a property
delete user3.age;
console.log(user3.age); // Prints 'undefined'

//-------------------------------------------------------------------------------------------

// Multi-worded properties and how to access them

let admin = {
    name: "John Doe",
    age: 34,
    "current status": "In-house",
}

console.log(admin["current status"]); // square bracket syntax is used to access multi-word properties.

let key = "current status";

console.log(admin[key]); // this is not possible with dot-notation

//-------------------------------------------------------------------------------------------

// Computed properties
/*
Suppose a list of properties are given in an array.
*/

let listOfProps = ["name", "age", "date-of-birth", "id-number", "profession"];
let listOfValues = ["Saranga", 26, "17-02-1993", 12235, "Developer"];

let newUser = new Object();

for (let j = 0; j < listOfProps.length; j++ ) {
    newUser[listOfProps[j]] = listOfValues[j];
}

console.log(newUser);

//-------------------------------------------------------------------------------------------

// Property-Value shorthand
/*
    Without explicitly assigning the value to the property, the property name followed by a
    comma is used as a short hand to 'name: name, age: age', etc
 */

function makeUser(name, age) {
    return {
        name,
        age,
    };
};

let makeUser2 = (name, age) => {
    return{
        name,
        age,
    };
}

let anotherUser = makeUser("Buwaneka", 27);
console.log(anotherUser);

let anotherUser2 = makeUser2("Saranga", 28);
console.log(anotherUser2);

//-------------------------------------------------------------------------------------------

// Using the 'in' keyword to check for property availability in an object

console.log("name" in newUser); // returns true
console.log("age" in newUser); // returns true
console.log("date-of-birth" in newUser); // returns true
console.log("id-number" in newUser); // returns true
console.log("profession" in newUser); // returns true
console.log("account-number" in newUser); // returns false

for ( key in newUser){
    console.log(`${key} = ${newUser[key]}`); // returns the values
}

//-------------------------------------------------------------------------------------------

// Copying by reference

let aUser = {
    name: "John Doe"
}

let aAdmin = aUser;

aAdmin.name = "Nexus Froth";

console.log(aUser); // reflects the changed name, because the object was not duplicated, only a reference to the object was assigned to 'aAdmin'

console.log(`Equality operator on two variables referencing the same object: ${aAdmin == aUser}`); // returns true

console.log(`Strict equality operator on two variables referencing the same object: ${aAdmin === aUser}`); // returns true

//-------------------------------------------------------------------------------------------

// Cloning objects rather than copying by reference

function CloneObj(inObj){
    let clone = {};
    for (let key in inObj) {
        clone[key] = inObj[key];
    };
    return clone;
};

let newUser_clone = CloneObj(newUser);

console.log(newUser_clone);
newUser.name = "Buwaneka";

console.log(newUser);
console.log(newUser_clone);

// Merging objects

let bUser = {name: "John Doe"};

let permission1 = {canView: true};
let permission2 = {canEdit: true};
let permission3 = {canDelete: false};

Object.assign(bUser, permission1, permission2, permission3);

console.log(bUser);

Object.assign(bUser, {name: "Peter Pan", isAdmin: false}); // existing properties will be over-written

console.log(bUser);

//-------------------------------------------------------------------------------------------

// Cloning using Object.assign

user = {
    name: "John",
    age: 30,
}

let user_clone = Object.assign({}, user); //using the empty object literal to copy from user and assign to user_clone

console.log(user_clone);

// By default cloning is shallow, we have to use other libraries to perform deep cloning
// Example

let person = {
    name: "Walter White",
    age: 53,
    bioData: {
        height: 185,
        weight: 80
    }
};

let person_clone = Object.assign({}, person);

console.log(person_clone); // prints the same object as above, but...

console.log(person.bioData === person_clone.bioData); // prints true, because the nested object is copied by reference withing the main object, therefore...

person.bioData.height++; // when modified on the person object...
console.log(person_clone.bioData.height); // change is reflected in the clone as well

// To prevent this behaviour deep cloning has to be done

//-------------------------------------------------------------------------------------------

// Task - Check for emptiness

let objA = {};
let objB = {
    prop1: 4534,
    prop2: 6561,
    prop3: 6556,
}

function isEmpty(inObj) {
    for(let key in inObj) {
        return false;
    }
    return true;
};

console.log((isEmpty(objA)) ? "objA is empty" : "objA is not empty");
console.log((isEmpty(objB)) ? "objB is empty" : "objB is not empty");

//-------------------------------------------------------------------------------------------

// Task - Sum values in object

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sum(inObj) {
    let sum = 0;
    if(isEmpty(salaries)){
        return sum;
    }
    else{
        for(let key in inObj) {
            sum += inObj[key];
        }
    }
    return sum;
}

console.log(sum(salaries));

//-------------------------------------------------------------------------------------------

// Multiply numeric properties by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplier(inObj) {
    if(!isEmpty(inObj)){
        for(let key in inObj) {
            if(typeof(inObj[key]) == 'number') {
                inObj[key] *= 2;
            }
        }
    }
}

console.log(menu);

multiplier(menu);

console.log(menu);