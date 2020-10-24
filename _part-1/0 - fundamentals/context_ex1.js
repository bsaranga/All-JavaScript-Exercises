// Write the dot operator as if it was implemented in JS.

var Person = function(name){
    this.name = name;
}

Person.prototype.isPerson = true; // All instances point to the function's prototype, so 'isPerson' is available on all instances.

var person = new Person('Smith');

console.log(DOT(person, 'name')); //person.name
console.log(DOT(person, 'isPerson')); //person.isPerson

/**
 * Hints:
 *  DOT take the object and the property
 *  DOT must walk up the __proto__chain
 *  object.hasOwnProperty("PROPERTY_NAME") returns if an object has a 'direct' property.
 */
 
 function DOT(obj, prop) {
    if(obj.hasOwnProperty(prop)){
        return obj[prop];
    }
    return DOT(obj.__proto__, prop);
 }
