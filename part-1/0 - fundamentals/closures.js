function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();

// Another identical approach is...

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc(); // returns the internal function to the variable myFunc
myFunc(); //when executed it still prints 'Mozilla'

/*
In other languages local variables within function scope are destroyed after the
function execution. In JS, this is not so.

The reason is JS forms 'Closures', a closure is a combination of a function and lexical
environment, within which that function was declared. 

This environment consists of any local variables that were in-scope at the time the
closure was created.

In the above code, myFunc is a 'reference to the instance of the function displayname'
created when makeFunc is run.

The instance of displayName maintains a reference to its lexical environment, within which the variable 'name' exists.

* Closure = Function + Lexical Environment
*/

// Another example of closures in action

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
var add5 = makeAdder(5);
var add10 = makeAdder(10);
  
console.log(add5(2));  // 7
console.log(add10(2)); // 12

/*
 * makeAdder is a function factory; it creates functions that can add specific values
 * to their argument.
 */

 /**
  * PRACTICAL USES OF CLOSURES
  * 
  * Lets you associate data with a function that operates on the data, where the data
  * is in the lexical environment, and together with the function forms a closures.
  */

  // Emulating private methods with closures - (The Module Design Pattern)

  var counter = (function() {
  
    var privateCounter = 0;
  
    function changeBy(val) {

      privateCounter += val;

    }
  
    return {

      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }

    };
  })();
  
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.

  // The above code can be modified as follows to make several counters.

  var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };
  
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  
  console.log(counter1.value());  // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.


  /**
   * Every closure has 3 scopes:
   *    1. Local Scope (own scope)
   *    2. Outer Functions Scope
   *    3. Global Scope
   */
  
   // global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // prints 20

// More on closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures