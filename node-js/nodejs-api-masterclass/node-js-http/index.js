const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello World</h1>");
    res.end();
});

server.listen(5000, () => console.log("Running on 5000"))