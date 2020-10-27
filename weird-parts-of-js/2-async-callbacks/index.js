function myTimeOut(time, callback){
    var timeout = time + new Date().getTime();
    while(new Date() < timeout){};
    callback();
}

function clickHandler(){
    console.log('Click event!');
}

document.addEventListener('click', clickHandler);

myTimeOut(3000, () => console.log("Waited 3 seconds"));
console.log('Finished execution');

/**
 * Events are added to the event queue after the global execution is done
 */