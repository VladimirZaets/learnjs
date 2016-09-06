//import { database } from 'setup/database';
//var sequelize = require('sequelize-mysql').sequelize;
"use strict";

var fabric = function(sequelize, DataTypes) { 
    var User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        field: 'firstName'
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'lastName'
    },
    usename: {
        type: DataTypes.STRING,
        field: 'usename',
        allowNull: false,
        unique: true
    }});

    return User;
};

export = fabric;
