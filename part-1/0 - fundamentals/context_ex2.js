// Write the dot [[call]] operator as if it was implemented in JS.

var Person = function(name){
    this.name = name;
}

Person.prototype.speak = function() {
    console.log('Hello! ' + this.name);
}

var person = new Person('Smith');

//DOTCALL( obj, propertyName, args );

console.log(person.hasOwnProperty('speak'));

function DOT(obj, prop) {
    if(obj.hasOwnProperty(prop)){
        return obj[prop];
    }
    return DOT(obj.__proto__, prop);
 }

function DOTCALL(obj, prop, args) {
    
}
