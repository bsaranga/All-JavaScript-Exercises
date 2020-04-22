(function (){
    var sum = function(x,y){
        return (++x) + (++y.val)
    },
    
    a = 1,
    b = {val:2},
    c = sum(a,b);
    
    var r_code = document.getElementById("code");
    var r_element = document.getElementById("result");
    
    var code = `var sum = function(x,y){
        return (++x) + (++y.val)
    },
    
    a = 1,
    b = {val:2},
    c = sum(a,b);
    `;
    
    r_code.innerText = `${code}`;
    r_element.innerText = `a = ${a}\nb = ${b}\nb.val = ${b.val}\nc = ${c}`;
}());

(
    function(){

        var a = {};
        for(var i = 0; i < 3; i++){
            a[i] = function(){console.log(`More examples: ${i}`)};
        }
        a[0]();
        a[1]();
        a[2]();
    
    var r_code = document.getElementById("code-1");
    var r_element = document.getElementById("result-1");

    var code = `var a = {};
    for(var i = 0; i < 3; i++){
        a[i] = function(){console.log("More examples:" + i)};
    }
    a[0]();
    a[1]();
    a[2]();`;

    r_code.innerText = `${code}`;
    r_element.innerText = `3\n3\n3`;

}());

(
    function(){
        var r_code = document.getElementById("code-2");
        var r_element = document.getElementById("result-2");

        var counter = function(){
            
            var count = 0;
            
            return function(){
                return ++count;
            };
        };

        var c1 = counter();       
        var c2 = counter();

        r_element.innerText = `c1() = ${c1()}\nc1() = ${c1()}\nc2() = ${c2()}`
        r_code.innerText = `var counter = function(){
            
            var count = 0;
            
            return function(){
                return ++count;
            };
        };

        var c1 = counter();
        c1();
        c1();       
        var c2 = counter();
        c2();`;
    }()
);