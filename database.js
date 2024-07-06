const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize('test-db', 'abhishekshah', 'password', {
    dialect: 'sqlite',
    storage: './dev.sqlite'
})

module.exports = sequelize;