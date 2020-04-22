var me = {
    name: {
        first: "Saranga"
    }
}, name = me.name;

console.log(me.name);

delete me.name;

console.log(name.first); // prints "Saranga"
console.log(me.name); // prints undefined
console.log(me); // prints an empty object

/*
Variable names are within parenthesis.
Objects are within braces.
References are dashed lines with or without labels.


(me) ------> {object} ---name---> {object} ---first---> "Saranga"
                                  /  
                                 /
                                /
                               /
                              /
                           (name)



The delete operation deletes the 'name' reference to the second object.

(me) ------> {object}             {object} ---first---> "Saranga"
                                  /  
                                 /
                                /
                               /
                              /
                           (name)
*/

// delete keyword only removes references between object, not the actual object.


var obj1 = {
    ref1: {
        ref2: {
            name: "Some string"
        }
    }
}, obj2 = obj1,
   obj3 = obj1.ref1,
   obj4 = obj1.ref1.ref2


console.log(obj4.name);
console.log(obj3.ref2.name);
console.log(obj2.ref1.ref2.name);

delete obj1.ref1;
console.log(obj2.ref1 == undefined); // true