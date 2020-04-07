'use strict';

function getSecondLargest(nums) {

    // Get the second largest int given an array of ints.

    nums.sort((a,b) => {return a-b});

    /*
      The sort function takes in a comparer function as an argument.
      1. If comparer func returns less than 0, then a precedes b.
      2. If comparer func returns greater than 0, then b precedes a.
      3. If comparer func returns zero, then the order isn't changed.
    */
   
    let secondLargest = nums[nums.length-2];
    return secondLargest;
}

console.log(getSecondLargest([5,6,3,6,7,5,1,2,5,1,3,0]));
console.log(getSecondLargest([12,2,3,2,1,2,5,7,8,9,6,11]));
console.log(getSecondLargest([5,6,8,9,7,8,1,12,15,13]));

var NewEmptyArray = [];

console.log(`Array-length: ${NewEmptyArray.length}`);

let NonEmptyArray = [2,3,5,6,5,4,5,2,1];
arrayPrinter(NonEmptyArray);




function arrayPrinter(InArray)
{
    InArray.forEach(element => {
        console.log(element);
    });
}