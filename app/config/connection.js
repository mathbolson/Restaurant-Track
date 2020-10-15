// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("heroku_e56097e5cbe37df", "b31abbe3c1dafa", "0c5bc512", {
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "us-cdbr-east-02.cleardb.com",
//   user: "b31abbe3c1dafa",
//   password: "0c5bc512",
//   database: "heroku_e56097e5cbe37df"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a table named "customers":*/
//   var sql = "CREATE TABLE ratings (username VARCHAR(255), restaurant_name VARCHAR(255), rating_VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });