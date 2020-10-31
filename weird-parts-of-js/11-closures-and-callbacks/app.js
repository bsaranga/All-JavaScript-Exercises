function mySetTimeOut(callback, time){
    var startTime = Date.now(); 
    var currTime = startTime;
    while(currTime < (currTime + time)){
        currTime += Date.now();
    }
    callback();
    var elapsed = startTime - Date.now();
    console.log(`Uncertainty: ${Math.abs(elapsed) - time} ms`);
}


mySetTimeOut(function(){
    console.log("Done");
}, 5000);