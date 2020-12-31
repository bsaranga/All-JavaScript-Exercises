const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Hello Freak Bitches\n')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    res.send('');
})

app.get('/flights/:from-:to', (req, res) => {
    console.log(req.params);
    res.send('');
})

app.get('/plantae/:genus.:species', (req, res) => {
    console.log(req.params);
    res.send('');
})

app.get('/example/a', function (req, res, next){
    console.log('Response will be send by next func')
    next()
}, function (req, res) {
    res.send('Hello from NeXt\n')
})

function factorial(x) {
    if(x === 0) {
        return 1
    }
    return x*factorial(x-1);
}

app.get('/factorial/:num', (req, res, next) => {
    res.send(`Factorial: ${factorial(Number(req.params.num))}\n`)
})

function first(req, res, next){
    console.log('Executed first function')
    next()
}

function second(req, res, next) {
    console.log('Executed second function')
    next()
}

function third(req, res) {
    res.send('Executed the last function in the pipeline\n')
}

app.get('/pipeline', [first, second, third]);

app.route('/flex')
    .get((req, res) => res.send('Get flex objects'))
    .post((req, res) => res.send('Create flex objects'))
    .put((req, res) => res.send('Update flex objects'))


app.listen(port,() => {
    console.log(`Listening at http://localhost:${port}`)
})