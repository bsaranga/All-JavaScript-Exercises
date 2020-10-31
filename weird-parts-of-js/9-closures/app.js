function greet(whattosay){
    return function(name){
        console.log(`${whattosay} ${name}`);
    }
};

function buildFunctions(){
    
    var arr = [];
     
    for (var index = 0; index < 3; index++) {
        arr.push((function(j){
            return function(){
                console.log(j);
            }
        })(index))
        
    }

    return arr;
}

var fs = buildFunctions();

console.log(fs);

fs[0]();
fs[1]();
fs[2]();