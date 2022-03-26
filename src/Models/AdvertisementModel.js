const AdvertisementModel = require('../Database/Table/Advertisement')


module.exports = {
    async list() {
        return await AdvertisementModel.findAll({ raw: true })
    }
}