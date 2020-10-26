const person = {
    name: 'Saranga',
    age: 27,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

const hobbies = ['Writing', 'Coding', 'Biking'];
const hobbies2 = hobbies.map(el => `Hobby: ${el}`);

/*
hobbies.forEach(element => {
    console.log(element);
});

hobbies2.forEach(element => {
    console.log(element);
});
*/

// ES-6 Syntax

// #Spread
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = {...person};
console.log(copiedPerson);

// #Rest Operator

const toArray = (...args) => args;
console.log(toArray(1,2,3,4));

// #Destructuring

const printName = ({name, age}) => {
    console.log(name, age);
}

const {name, age} = person; //object destructuring

printName(person);
console.log(`${name} is ${age}`);

const [hob1, hob2] = hobbies; // array destructuring

console.log(hob1, hob2);

setTimeout(() => {console.log("Timer is done")}, 2000);