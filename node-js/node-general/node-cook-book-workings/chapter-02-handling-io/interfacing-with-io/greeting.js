const p = require('process');

p.stdin.on('data', data => {
    const dataMap = data.toString().trim().toUpperCase();
    if(dataMap !== ""){
        p.stdout.write(`Hello ${dataMap} \n`);
    }else{
        p.stderr.write("Empty input...");
    }
})