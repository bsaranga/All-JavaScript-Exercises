const fs = require('fs');
const path = require('path');

let promise = new Promise(
    
    function executor(resolve, reject) {
        try {
            let result = fs.readFileSync(path.resolve(__dirname, 'myContent.txt'));
            resolve(result.toString());
        } catch (err) {
            reject(err.message);
        }
    }

);

promise
    .then((val) => console.log(val))
    .catch((err) => {
        console.log(err);
    })