const router = require('express').Router()
const advertisementModel = require('../Models/AdvertisementModel')

router.get('/', async (req, res, next) => {
    const allAdvertisement =  await advertisementModel.list()
    res.json(allAdvertisement)
})

module.exports = router
