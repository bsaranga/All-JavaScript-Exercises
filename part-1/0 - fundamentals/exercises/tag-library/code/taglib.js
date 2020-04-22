var make = {};

var tags = ['a', 'div', 'span', 'form', 'h1', 'h2', 'h3', 'h4', 'article'];

for(var i = 0; i < tags.length; i++) {
    (
        function(tag){
            make[tag] = function(){
                return document.createElement(tag);
            };
        }(tags[i])
    );
}

console.log(make);

var h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

var a = make.a();
a.href= 'http://canjs.us';
a.innerHTML = 'CanJS';
document.body.appendChild(a);

var h2 = make.h2();
h2.innerHTML = "This is a summary";
document.body.appendChild(h2);