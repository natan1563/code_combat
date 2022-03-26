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
      res.status(400).json({error: err.message})
   }
})

router.put('/update/:id', async(req, res, nex) => {
    try {
        const userData = req.body
        const id = req.params.id
        await userModel.update(id, userData)

        res.status(204).end()
    } catch (err) {
        console.error(err.message)
        res.status(400).end()
    }
})

router.delete('/delete/:id', async(req, res, next) => {
    try {
        const id = req.params.id
        await userModel.delete(id)

        res.status(204).end()
    }catch (err) {
        console.error(err.message)
        res.status(404).end()
    }
})

module.exports = router