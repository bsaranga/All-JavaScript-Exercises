// Function constructor is equivalent to a class
function Person(firstname, lastname){
    this.firstname = firstname,
    this.lastname = lastname
};

// Defining methods on the prototype
Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
};

// Object instantiation
var saranga = new Person("Saranga", "Buwaneka");

console.log(saranga.getFullName());


// Pure Prototypal Inheritance

var person = {
    greet: function(){
        return `Hi, ${this.firstname}...`;
    }
}

var buwaneka = Object.create(person);
buwaneka.firstname = "Saranga";

console.log(buwaneka.greet());