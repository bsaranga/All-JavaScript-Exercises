var foo = "bar"

function bar() {
    var foo = "baz"

    function baz(foo) {
        foo = "bam"
        bam = "yay"
    }

    baz()
}

bar(); // when bar is executed it executes baz within its scope, 'baz' has a parameter 'foo' which is considered just as a variable
// on line 7, the execution engine asks "hey is there a variable foo?" the answer is yes, it was created as a parameter, and "bam"
// is assigned to it. On line 8, the execution engine asks, "hey is there a variable bam?", the answer is no, so we go to the scope
// of 'bar', and ask, "hey is there a variable bam?", nope. so we go to the global scope and create a variable 'bam' and assign "yay"

console.log(bam); // prints "yay"
console.log(foo); // prints "bar" ...if line 1 was commented, then this will throw a Reference Error

// In JavaScript, the unit of scope is the function