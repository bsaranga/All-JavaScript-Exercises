let items = require('./items')

function evaluate() {

    setImmediate(() => console.log("Before"));

    console.log('After');
}

evaluate();