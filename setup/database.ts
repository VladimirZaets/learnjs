const Sequelize = require('sequelize-mysql').sequelize;

import { config } from 'config';

const databaseConfig = config.get('database');
const sequelize = new Sequelize(
        databaseConfig.database,
        databaseConfig.user,
        databaseConfig.password
    );

export { sequelize as database };