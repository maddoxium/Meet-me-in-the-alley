// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");   

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({       // Use the Handlebars engine
  defaultLayout: "main"                 // Use 'main' for static content
}));

app.set("view engine", "handlebars"); 

// Static directory
app.use(express.static("public"));          // Moved above routing to avoid CSS problems with * route - DLO

const routes = require("./controllers/alley_controller.js");

// Requiring our models for syncing
var db = require("./models/models.js");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);


// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {           // I had to remove this line to get a barebones app running - DLO
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);          
//   });
// });

app.listen(PORT, () => {  
  console.log("Server is up on port ", PORT);
});  