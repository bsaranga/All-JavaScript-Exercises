let user = new Object(); // object constructor syntax
let user2 = {}; // object literal syntax

let user3 = {
    name: "Saranga",
    age: 26
};

// Accessing the properties of an object
console.log(user3.name);
console.log(user3.age);

user.isAdmin = true; // implicit addition of a property
(user.isAdmin) ? console.log("User is admin") : console.log("User isn't admin");

// Removal of a property
delete user3.age;
console.log(user3.age); // Prints 'undefined'

// Multi-worded properties and how to access them

let admin = {
    name: "John Doe",
    age: 34,
    "current status": "In-house",
}

console.log(admin["current status"]); // square bracket syntax is used to access multi-word properties.