var Sequelize = require('sequelize'),
    config = require('config').get('database'),
    sequelize = new Sequelize(
        config.database,
        config.user,
        config.password
    );

module.exports = sequelize;


