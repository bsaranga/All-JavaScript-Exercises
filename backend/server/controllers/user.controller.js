const User = require('../sequelize').models.User
const extend = require('lodash').extend
// TODO: Error handler

const create = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (error) {
        return res.status(400).json({
            error: error.toString()
        })
    }
    
}

const UserCtrl = {};
UserCtrl.create = create

module.exports = UserCtrl