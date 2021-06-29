function makeGreeting(language){
    
    return function(firstName, lastName){
        if(language === 'en'){
            console.log(`Hello, ${firstName} ${lastName}`);
        }
        if(language === 'es'){
            console.log(`Hola, ${firstName} ${lastName}`);
        }
    }
}


function funcFactory(defaultParam){
    if(defaultParam == 1){
        return function(add){
            console.log(`Default: ${defaultParam}`);
            return defaultParam + add;
        }
    }else if(defaultParam == 2){
        return function(sub){
            console.log(`Default: ${defaultParam}`);
            return defaultParam - sub;
        }
    }else{
        return function(){
            return null;
        };
    }
};

var noParam = funcFactory();
var adder = funcFactory(1);
var subber = funcFactory(2);

console.log(noParam());
console.log(adder(1));
console.log(subber(3));
