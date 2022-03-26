const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'code_combat',
    'root',
    'un1d3v@sql',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize