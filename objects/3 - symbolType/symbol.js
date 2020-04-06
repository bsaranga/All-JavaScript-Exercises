let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2);
console.log(id.description);
console.log(id2.description);

//Symbolic properties

let user = {
    name: "Buwaneka Saranga",
    [id2]: "Saranga",
    age: 27,
    [id]: 5541,
    dob: "1993/02/17"
}

//Symbolic properties are skipped in for loops
for (const key in user) {
    console.log(key);
}

let user_clone = Object.assign({}, user); // In contrast Object.assign copies both normal properties and symbolic properties

console.log(user_clone[id]);