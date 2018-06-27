// ================================================================================
//  api-routes.js - A set of routes for sending users to the various html pages
// ================================================================================

// Dependencies
// ================================================================================

// Require models
var db = require("../models");

// ================================================================================
// ROUTES
// ================================================================================

module.exports = function(app) {
  // ================================================================================
  // GET route
  // ================================================================================
  // To do: Make a GET route for filters
  // Ex.: If users want to only see popular items

  // Display all items
  // Replace insertdb with sequelize data
  app.get("/api/all", function(req, res) {
    db.Product.findAll({}).then(function(data) {
      var hbsObject = {
        products: data
      };
      // Note:
      // Pass in handlebars and whatever needs to be passed
      res.render("index", hbsObject);
    });
  });

  // Display individual items
  // Replace insertdb with sequelize data
  app.get("/api/sell/:id", function(req, res) {
    db.Product.findOne({
      where: req.params.id
    }).then(function(data) {
      // Note:
      // Pass in handlebars and whatever needs to be passed
      res.json(data);
    });
  });

  // ================================================================================
  //POST route
  // ================================================================================

  app.post("/all", function(req, res) {
    db.Seller.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // ================================================================================
  //UPDATE route
  // ================================================================================

  app.put("/item/:id", function(req, res) {});

  // ================================================================================
  //DELETE route
  // ================================================================================

  app.delete("", function(req, res) {});
};
