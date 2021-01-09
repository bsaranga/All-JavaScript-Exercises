const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

const app = express()

app.use(express.static(path.join(__dirname, 'client/')))

app.use(express.json()) //replace express with bodyParser if errors occurr
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet({
    contentSecurityPolicy: false,
}))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/', 'index.html'))
})

app.use('/', userRoutes);
app.use('/', authRoutes);

app.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        res.status(401).json({
            error: `${err.name}; ${err.message}`
        })
    }else if (err) {
        res.status(400).json({
            error: `${err.name}; ${err.message}`
        })
        console.log(err)
    }
})

module.exports = app