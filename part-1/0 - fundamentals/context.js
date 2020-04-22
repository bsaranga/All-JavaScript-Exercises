Person = function(name){
    this.name = name;
}

var p = new Person("Justin Meyer"); // in this scenario, 'this' points to 'p'

console.log(p); // prints the object

var p_ = Person("Justing Meyer"); // in this scenario, 'this' points to the global context.

console.log(p_); // prints undefined, since there's no 'name' variable in the global context.

console.log(p.__proto__.__proto__); // objects have __proto__, it points to whatever it is inheriting from. functions have prototypes.