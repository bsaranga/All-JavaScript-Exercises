document.writeln('Hello World');

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

if(typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}

var someObj = {
    name: 'Saranga',
    age: 27,
    sex: 'male',
    printAll: function() {
        var that = this;

        console.log(`${this.name}\n${this.age}\n${this.sex}`)

        var helper = function(){
            console.log(that);
        }

        helper()
    }
}

someObj.printAll()

var anotherSomeObj = Object.create(someObj)

//console.log(anotherSomeObj.name)
//someObj.printAll()


// constructor invocation pattern

var Quo = function (input) {
    this.status = input
}

Quo.prototype.getStatus = function() {
    return this.status
}

var myQuo = new Quo("confused");
document.writeln(myQuo.getStatus());

var statusObj = {
    status: 'O-OK'
}

document.writeln(Quo.prototype.getStatus.apply(statusObj));