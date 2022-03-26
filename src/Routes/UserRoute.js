const router = require('express').Router()
const userModel = require('../Models/UserModel')

router.get('/', async (req, res, next) => {
    const allUsers = await userModel.list()
    res.json(allUsers)
})

router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    const user = await userModel.getById(id)
    res.json(user)
})

router.post('/create', async(req, res, next) => {
   try {
    const userData = req.body
    const createdUser = await userModel.create(userData)

    res.status(201).json(createdUser)
   } catch (err) {
       console.error(err.message)
       res.end()
   }
})

module.exports = router