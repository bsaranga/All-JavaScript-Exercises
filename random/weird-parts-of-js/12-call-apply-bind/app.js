// Bind

var person = {
    name: "Appuhami",
    hello: function(greeting){
        console.log(`${this.name} says ${greeting}`);
    }
}

// direct invocation using dot notation access
person.hello("hello");

// invoke later using binding

var greeting = person.hello.bind({name: "Solis"}, "Hola");
greeting();

var greet = function (greeting){
    console.log(`${this.name} says ${greeting}`);
}.bind(person);

greet('Ayubowan');

// Call

var utils = {
    area: function(){
        return Math.PI*Math.pow(this.radius,2);
    }
}

var geo = {
    circles:[
        {name:"circle1", radius: 2.312},
        {name:"circle2", radius: 3.112},
        {name:"circle3", radius: 2.211}
    ],
    areas:[]
}

geo.circles.forEach(
    circ => geo.areas.push({name:circ.name, area: utils.area.call(circ)})
);

console.log(geo);

// Apply

var person = {
    firstname: "Buwaneka",
    lastname: "Saranga"
}

function say(){
    return `${this.firstname} ${this.lastname} says ${arguments[0]}`;
}

console.log(say.apply(person, ["Ayubowan"])); //args passed in array
console.log(say.call(person, "Hello"));