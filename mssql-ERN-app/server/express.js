const path = require('path')
const cwd = process.cwd()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const devBundle = require('./devBundle')
const template = require('../template')

const app = express()
devBundle.compile(app) // development only -- comment during production

app.use('/dist', express.static(path.join(cwd, 'dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send(template())
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