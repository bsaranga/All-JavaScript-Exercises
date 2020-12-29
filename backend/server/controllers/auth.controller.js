const User = require('../sequelize').models.User
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const config = require('../../config/config')

const signin = async(req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user) return res.status(401).json({error: "User not found"})
        if(!user.authenticate(req.body.password)) return res.status(401).send({error: "Email and password do not match"})

        const token = jwt.sign({id: user.id}, config.jwtSecret)

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
    userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
    // TO DO
}

module.exports = {signin, signout, requireSignIn, hasAuthorization}