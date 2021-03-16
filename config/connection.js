const Sequelize = require('sequelize');

require('dotenv').config();

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW)

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 330654
});

module.exports = sequelize;
