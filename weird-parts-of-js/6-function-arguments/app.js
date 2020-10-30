// Using the spread operator

function foo(...args){
    function bar(...args2){
        args.push(...args2)
        console.log(args);
    }
    bar("new args");
}

foo(1,"string", {name:"Saranga"} [2,4,6,8], false);

// Using the arguments object

function loo(){
    var arr = []
    for(var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    function gloo(params){
        console.log(params);
    }
    gloo(arr);
}

loo(1,'string',3.142,false,{obj:'object'},['arr']);

// Setting a default value if parameter now provided

function newFunc(param){
    var internalValue = param || "default";
    console.log(internalValue);
}

newFunc();
newFunc('givenValue');