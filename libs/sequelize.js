const { Sequelize } = require('sequelize');

const config = require('../config/config');

const setupModels = require('../db/models');

const user = encodeURIComponent(config.db.user);
const password = encodeURIComponent(config.db.password);
const URI = `mysql://${user}:${password}@${config.db.host}:${config.db.port}/${config.db.database}`;


const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;