// ================================================================================
// html-routes.js - A set of routes for sending users to the various html pages
// ================================================================================

// Dependencies
// =============================================================
var path = require("path");

// ================================================================================
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Log in page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // Main landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // Item's detailed page
  app.get("/item", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // Page for selling items
  app.get("/sell", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });
};
