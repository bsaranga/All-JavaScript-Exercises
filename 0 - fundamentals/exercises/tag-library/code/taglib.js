var make = {
    h1: function(){
        return document.createElement('h1');
    },
    a: function(){
        return document.createElement('a');
    }
};

var h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

var a = make.a();
a.href= 'http://canjs.us';
a.innerHTML = 'CanJS';
document.body.appendChild(a);