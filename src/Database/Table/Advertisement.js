const { Sequelize, DataTypes, Model } = require('sequelize');
const instance = require('../CodeCombat')

const columns = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    file: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM(["Y", "N"]),
        allowNull: false,
        defaultValue: "Y"
    },

    date_from: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    date_to: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}
    const options = {
        freezeTableName: true,
        tableName: 'advertisement',
        timestamps: false
    }

module.exports = instance.define('advertisement', columns, options)