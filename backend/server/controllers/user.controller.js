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

module.exports = UserCtrl