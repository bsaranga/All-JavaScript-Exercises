/*
class MyClass {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    concatenate() {
        return `${this.p1}${this.p2}${this.p3}`;
    }
}

const myClassInstance = new MyClass('blue', 'berry', 'milk');

console.log(myClassInstance.concatenate());

function makeClass(param) {
    return class{
        hello(){
            return `Hello ${param}`
        }
    }
}

let greeter = makeClass('Saranga');
console.log(new greeter().hello());
*/

class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 5){
            console.log(`Should be greater than 5 chars`);
            return;
        }else {
            this._name = value;
        }
    }
}

let user = new User('Saranga');
console.log(user)