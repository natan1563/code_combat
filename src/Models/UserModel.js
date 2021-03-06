const UserModel = require('../Database/Table/User')
const bcrypt = require('bcrypt')


module.exports = {
    async list() {
        return await UserModel.findAll({ raw: true })
    },

    async getById(id) {
        return await UserModel.findOne({ where: { id } })
    },

    async create(userData) {
        const password = userData.password

        if (!password) 
            throw new Error('Please fill the password')
        
        const createdUser =  await UserModel.create(userData)
        const responseData = await this.getById(createdUser.id)
        responseData.password = undefined
        
        return responseData
    },

    async update(id, data){
        await UserModel.update(data, { where: { id } })
    },

    async delete(id){
        await UserModel.destroy({ where: { id } })
    }
}