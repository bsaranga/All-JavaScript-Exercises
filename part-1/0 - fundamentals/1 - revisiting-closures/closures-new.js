/**
 * In JS, functions have lexical scope
 */

 function iter() {
     var count = 0;
     return function () {
        return ++count;
     }
 }

 var firstIterator = iter();
 var secondIterator = iter();

 secondIterator();
 secondIterator();
 

 console.log(`First iterator: ${firstIterator()}`);
 console.log(`First iterator: ${firstIterator()}`);
 console.log(`First iterator: ${firstIterator()}`);
 console.log(`First iterator: ${firstIterator()}`);
 console.log(`First iterator: ${firstIterator()}`);

 console.log(`Second iterator: ${secondIterator()}`);
 console.log(`Second iterator: ${secondIterator()}`);
 console.log(`Second iterator: ${secondIterator()}`);
 console.log(`Second iterator: ${secondIterator()}`);
 