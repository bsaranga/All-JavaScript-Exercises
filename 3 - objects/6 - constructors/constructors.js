// Constructors are re-usable object creation code.

function User(name, admin=false) {
    this.name = name;
    this.isAdmin = admin;

    this.sayHi = function () {
        console.log(`Hi, my name is ${this.name}`);
    }

    this.adminStatus = function () {
        console.log(this.isAdmin ? "Admin" : "Not Admin");
    }
}

let saranga = new User('Saranga');

saranga.sayHi();
saranga.adminStatus();

let sandalika = new User('Sandalika', true);

sandalika.sayHi();
sandalika.adminStatus();


function NonObject(){
    this.name = 'Not an object';
    this.dimensions = 0;
}

let nullObj = new NonObject; // no need to include parenthesis when there are no parameters to be taken

console.log(nullObj.name);
console.log(nullObj.dimensions);