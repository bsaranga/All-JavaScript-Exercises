const LinkedList = require('./linkedList')

require('./LinkedList')

const lL = new LinkedList();

lL.prepend('first element');
lL.append('second element');
lL.prepend('zeroth element');

console.log(lL);