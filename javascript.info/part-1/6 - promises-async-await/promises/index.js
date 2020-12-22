let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("It's done"), 1500);
});

promise.then(value => console.log(value), error => console.log(error));