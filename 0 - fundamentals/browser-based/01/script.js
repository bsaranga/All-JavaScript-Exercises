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
var result = "Hello World";

(function () {
    r_code.innerText = `${code}`
    r_element.innerText = `a = ${a}\nb = ${b}\nb.val = ${b.val}\nc = ${c}`;
}());