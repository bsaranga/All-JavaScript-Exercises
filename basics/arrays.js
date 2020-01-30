'use strict';

function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a,b){return a-b});
    let maxNum = nums[nums.length-1];

    for(let i=0; i<nums.length; i++){
        if(nums[i]+1 == maxNum){
            return nums[i];
        }
    }
}

console.log(getSecondLargest([5,6,3,6,7,5,1,2,5,1,3,0]));