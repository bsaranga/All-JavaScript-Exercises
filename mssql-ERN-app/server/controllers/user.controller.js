const User = require('../sequelize').models.User
const exists = require('../helpers/helpers')

async function userById(req, res, next, id) {
    User.findByPk(id).then(user => {
        if(!user) return res.status(400).json({error: "User not found"})
        req.profile = JSON.stringify(user)
        next()
    }).catch(err => {
        return res.status(400).json({
            error: "Could not retrieve user"
        })
    })
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (error) {
        return res.status(400).json(error)
    }   
}

async function read(req, res) {
    const user = await User.findAll({
        attributes: {exclude: ['id', 'salt', 'hashed_password']},
        where: {
            id: req.params.userId
        }
    })
    return res.status(200).json(user)
}

async function update(req, res) {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        const updatedUser = await User.findAll({
            attributes: {exclude: ['id', 'salt', 'hashed_password']},
            where: {
                id: req.params.userId
            }
        })
        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}

async function remove(req, res){
    exists(User, req.params.userId).then(val => {
        if(val) {
            User.destroy({
                where: {
                    id: req.params.userId
                }
            })
            return res.status(200).json({
                message: "Deleted user"
            })
        }
    }).catch(err => {
        return res.status(400).json({
            error: err
        })
    })
}

async function list(req, res){
    try {
        const users = await User.findAll({
            attributes: ['name', 'email', 'createdAt', 'updatedAt']
        })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = {
    create,
    read,
    update,
    list,
    remove,
    userById
}