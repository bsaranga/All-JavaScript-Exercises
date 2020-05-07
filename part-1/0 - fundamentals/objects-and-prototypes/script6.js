'use strict';

var arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', {get: function() {
    return this[this.length - 1];
}})

display(arr.last);

var arr2 = ['one', 'two', 'three', 'four'];

display(arr2.last);