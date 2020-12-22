const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a post request')
})

app.put('/users', (req, res) => {
    res.send('Got a put request')
})

app.delete('/users', (req, res) => {
    res.send('Got a delete request')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})