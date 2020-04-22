Build a tag library that creates elements of the following types in the least LOC:  a, div, span, form, h1, h2, h3, h4.

Example usage:

var h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

var a = make.a();
a.href= 'http://canjs.us';
a.innerHTML = 'CanJS';
document.body.appendChild(a);

HINTS:
Code is ‘built’ one statement at a time.
document.createElement('h1') –  creates and returns an 'h1' element.