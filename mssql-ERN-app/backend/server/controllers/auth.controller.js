import sequelize from '../sequelize'
const User = sequelize.models.User
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config/config'

const signin = async(req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user) return res.status(401).json({error: "User not found"})
        if(!user.authenticate(req.body.password)) return res.status(401).send({error: "Email and password do not match"})

        const token = jwt.sign({id: user.id}, config.jwtSecret, {algorithm: 'HS256'})

        res.cookie('t', token, { expire: new Date() + 9999 })

        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    }).catch(err => {
        console.log(`Sign-in error: ${err}`)
        return res.status(401).json({ error: "Could not sign in" })
    })
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status(200).json({
        message: "Signed out"
    })
}

const requireSignIn = expressJwt({
    secret: config.jwtSecret,
    algorithms: ['HS256'],
    userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && JSON.parse(req.profile).id == req.auth.id
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
    next()
}

export {signin, signout, requireSignIn, hasAuthorization}