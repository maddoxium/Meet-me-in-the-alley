const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const routes = require("./controllers/alley_controller.js");
const app = express();
const port = process.env.port || 1337

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));  
app.set("view engine", "handlebars");         


// app.get("/", (req, res) => {
//     res.render("index.handlebars", {
//     });
// });

// app.get("/sell", (req, res) => {
//     res.render("sell.handlebars", {
//     });
// });

// app.get("/item", (req, res) => {
//     res.render("item.handlebars", {
//     });
// });


//////////////////    REMOVE ME REMOVE ME //////////////////////
// app.get("/auth", (req, res) => {
//     res.render("auth.handlebars", {
//     });
// });
//////////////////    REMOVE ME REMOVE ME //////////////////////

app.use(routes);

app.listen(port, () => {  
    console.log("Server is up on port ", port);
});  