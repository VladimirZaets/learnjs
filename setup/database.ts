import { config } from 'config';
const Sequelize = require('sequelize-mysql').sequelize;

let databaseConfig = config.get('database'),
    sequelize = new Sequelize(
        databaseConfig.database,
        databaseConfig.user,
        databaseConfig.password
    );

export { sequelize as database };