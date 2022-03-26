const { Sequelize, DataTypes, Model } = require('sequelize');
const instance = require('../CodeCombat')

const columns = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true
    },

    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    activated: {
        type: DataTypes.ENUM(["Y", "N"]),
        allowNull: false,
        defaultValue: "Y"
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

const options = {
    freezeTableName: true,
    tableName: 'user',
    timestamps: false
}

module.exports = instance.define('user', columns, options)