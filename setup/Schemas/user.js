var sequelize = require('sequelize-mysql').sequelize,
    database = require('../database');

var User = database.define('user', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize.STRING,
        field: 'firstName'
    },
    lastName: {
        type: sequelize.STRING,
        field: 'lastName'
    },
    usename: {
        type: sequelize.STRING,
        field: 'usename',
        allowNull: false,
        unique: true
    },
});

module.exports = User;