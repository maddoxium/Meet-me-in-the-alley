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
var app = express();                                                // Call expressJS using 'app'
var PORT = process.env.PORT || 1337;                                // Allow Heroku to choose the port or use 1337

app.engine("handlebars", exphbs({                                   // Use the Handlebars engine
  defaultLayout: "main"                                             // Use 'main' for static content
}));

app.set("view engine", "handlebars");                           

app.use(express.static("public"));                                  // Moved above routing to avoid CSS problems with * route - DLO

const routes = require("./controllers/alley_controller.js");

var db = require("./models/alley.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));  
app.set("view engine", "handlebars"); 

app.use(routes);


app.listen(PORT, () => {  
  console.log("Server is up on port ", PORT);
});  