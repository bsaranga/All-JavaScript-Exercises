import config from '../config/config'
import sequelize from './sequelize'

import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

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

sequelize.authenticate().then(() => {
    console.log('Database connection established successfully')
}).catch(err => console.log(`Error: ${err}`));


app.listen(config.port, err => {
    if(err) {
        console.log(`An error occurred: ${err}`)
    }
    console.log(`Server running on port ${config.port}`)
})