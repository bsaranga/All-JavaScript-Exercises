const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

const {Template} = require('../template')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

/*
app.get('/', (req, res) => {
    res.status(200).send(Template)
})
*/

app.use('/', userRoutes);
app.use('/', authRoutes);

module.exports = app