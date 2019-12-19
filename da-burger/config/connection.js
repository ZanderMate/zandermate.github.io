// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("burger_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.creatConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
  });
}

// Exports the connection for other files to use
module.exports = sequelize;
