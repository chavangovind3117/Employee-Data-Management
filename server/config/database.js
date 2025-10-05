// backend/config/database.js

const { Sequelize } = require('sequelize');

// This tells Sequelize to use the SQLite dialect and
// store the database in a file named 'database.sqlite'.
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;