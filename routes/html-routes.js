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

    app.get("/", (req, res) => {
        res.render("index.handlebars", {
        });
    });

    app.get("/sell", (req, res) => {
        res.render("sell.handlebars", {
        });
    });

    app.get("/item", (req, res) => {
        res.render("item.handlebars", {
        });
    });
};