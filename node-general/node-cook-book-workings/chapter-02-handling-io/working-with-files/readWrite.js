const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "hello.txt");
fs.readFileSync(filePath, 'utf8', (err, contents) => {
    if (err) {
        return console.log(err);
    }

    console.log(`File contents: ${contents}`);
    const upperContents = contents.toUpperCase();
    
    setTimeout(() => {
        fs.writeFile(filePath, upperContents, (err) => {
            if (err) throw err;
            console.log("File updated");
        });
    }, 10);
});

setInterval(() => process.stdout.write("**** \n"), 1).unref();