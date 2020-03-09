const dbConfig = require('../config/sequelize');
const Sequelize = require('sequelize');
const User = require('../../Models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;