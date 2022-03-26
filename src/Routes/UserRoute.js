const router = require('express').Router()
const userModel = require('../Models/UserModel')

router.get('/', async (req, res, next) => {
    const allUsers = await userModel.list()
    res.json(allUsers)
})

module.exports = router