// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Rating = require("../models/restaurant.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all 
  app.get("/api/all", function(req, res) {
    Rating.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific
  app.get("/api/restaurant", function(req, res) {
    Rating.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });


  app.post("/api/add", function(req, res) {
    console.log(req)
    console.log("Rating Data:");
    console.log(req.body);
    Rating.create({
      username: req.body.username,
      restaurant_name: req.body.restaurant_name,
      rating: req.body.rating,
    }).then(function(results) {
      res.json(results);
    });
  });

   // Add a rating
   app.post("/api/new", function(req, res) {
    console.log(req)
    console.log("Rating Data:");
    console.log(req.body);
    Rating.create({
      username: req.body.username,
      restaurant_name: req.body.restaurant_name,
      rating: req.body.rating,
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete a review
  app.delete("/api/restaurant/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    Rating.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });

  });

};
