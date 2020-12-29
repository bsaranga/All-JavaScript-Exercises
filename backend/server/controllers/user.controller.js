const User = require('../sequelize').models.User
const extend = require('lodash').extend
const errorHandler = require('./error.controller')

const UserCtrl = {};

UserCtrl.create = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (error) {
        return res.status(400).json(errorHandler(error))
    }
    
}

UserCtrl.read = async (req, res) => {
    return res.status(200).json(req.profile)
}

UserCtrl.update = async (req, res) => {
    try {
        let userInstance = req.profile
        //TO DO
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}

UserCtrl.list = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['name', 'email', 'createdAt', 'updatedAt']
        })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(errorHandler(error))
    }
}

UserCtrl.userByID = async (req, res, next, id) => {
    try {
        let user = await User.findAll({
            //attributes: ['name','email','createdAt','updatedAt'],
            where: {
                id: id
            }
        })

        if(!user) return res.status(400).json({
            error: "User not found"
        })

        req.profile = user;
        next()
    } catch (error) {
        return res.status(400).json({
            error: "User not found"
        })
    }
}

module.exports = UserCtrl