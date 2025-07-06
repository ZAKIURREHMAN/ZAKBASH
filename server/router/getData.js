
const express = require('express')
const router = express.Router()
const {verifiedUsers,singleUser} = require('../controlars/allUsers')
const findOneUser = require('../controlars/findOneUser')


router.get('/profile',verifiedUsers)
router.post('/find/one',findOneUser)
router.get('/single/user/profile/:id',singleUser)

module.exports = router