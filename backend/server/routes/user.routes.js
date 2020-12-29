const express = require('express')
const userCtrl = require('../controllers/user.controller')

const router = express.Router()

router.route('/api/users')
    .post(userCtrl.create)
    //.get(userCtrl.list)
/*
router.route('/api/users/:userId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove)

router.param('userId', userCtrl.userByID)
*/

module.exports = router