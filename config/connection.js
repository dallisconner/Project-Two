let Sequelize = require('sequelize')

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

//the first empty string is the database name
let sequelize = new Sequelize('', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

module.exports = sequelize
