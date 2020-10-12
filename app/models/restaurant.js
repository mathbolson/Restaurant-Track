// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


var Rating = sequelize.define("rating", {
  username: Sequelize.STRING,
  restaurant_name: Sequelize.STRING,
  rating: Sequelize.STRING,
});

Rating.sync({force: true}).then(function() {
  // Table created
  return Rating.create({
    username: 'Matt',
    restaurant_name: "Chipotle",
    rating: "###"
  });
});

module.exports = Rating;
