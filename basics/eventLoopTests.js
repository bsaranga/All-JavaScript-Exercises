 /*
let time = 5;

for (let index = time; index > 0; index--) {
    setTimeout(() => {console.log("Time: "+index)}, index*1000);
}

*/

console.log("Hello");

setTimeout(() => {
    console.log("Callback 1");
},5000)

console.log("Ending line");

//What happens ---->
/*
    1. The call stack is empty.
    2. console.log("Hello") is added to the call stack.
    3. console.log("Hello") is executed.
    4. console.log("Hello") is removed from the call stack.
    5. setTimeout(...) is added to the call stack.
    6. setTimeout(...) is executed and a relevant browser API creates a timer, which handles the 5 sec countdown.
    7. setTimeout is executed and removed from the call stack.
    8. console.log("Ending line") is added to the call stack.
    9. console.log("Ending line") is executed.
    10. console.log("Ending line") is removed from the call stack.
    11. After 5000ms the anonymous call back is pushed to the call-back queue.
    12. The event loop takes the anonymouos call back from the call-back queue and pushes to the call stack.
    13. Anonymous call back is executed.
    14. console.log("Callback 1") is added to the call stack.
    15. console.log("Callback 1") is executed.
    16. console.log("Callback 1") is removed from the call stack.

    **. The call-back is placed in the call-back queue after the timer set by setTimeout expires. Therefore this doesn't mean
        that the call-back will execute exactly after 5s. If there are other events in the call-back queue those will be
        executed first.
*/

console.log("Setting a time-out with no delay");
setTimeout(() => {
    console.log("Hello from the call-back...");
}, 0)
console.log("Bye");

//The callback is executed last..., but the last line printed is from the code above with the 5sec timer.

