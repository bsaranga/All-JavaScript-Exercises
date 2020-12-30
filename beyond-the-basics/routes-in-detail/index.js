const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Freak Bitches\n')
})

app.post('/:param', (req, res) => {
    console.log(req.params)
})

app.listen(port,() => {
    console.log(`Listening at http://localhost:${port}`)
})