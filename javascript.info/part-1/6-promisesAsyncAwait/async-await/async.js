const fs = require('fs').promises;

async function f() {
    return 1;
}

// async keyword ensures that the function returns a promise object

f().then(val => console.log(`Returned: ${val}`))

// await keyword can only be used in an async function

async function readingFile(filename) {

    let file = (await fs.readFile(`./${filename}`)).toString();

    return await file
}

readingFile('content.txt').then(val => console.log(val));