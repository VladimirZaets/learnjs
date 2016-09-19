import { config } from 'config';
const Sequelize = require('sequelize-mysql').sequelize,
    databaseConfig = config.get('database'),
    sequelize;

sequelize = new Sequelize(
        databaseConfig.database,
        databaseConfig.user,
        databaseConfig.password
    );

export { sequelize as database };