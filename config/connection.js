let Sequelize = require('sequelize')

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

let sequelize = new Sequelize('spooky_db', 'root', '', {
  host: 'localhost',
  port: process.env.PORT || 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

module.exports = sequelize
