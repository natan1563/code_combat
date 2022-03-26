const UserModel = require('../Database/Table/User')

module.exports = {
    async list() {
        return await UserModel.findAll({ raw: true })
    }
}