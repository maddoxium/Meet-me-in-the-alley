
const express = require("express");
const model = require("../models/models.js");
const router = express.Router();


// app.get("/", (req, res) => {
//         res.render("index.handlebars", {
//         });
//     });
    
//     app.get("/sell", (req, res) => {
//         res.render("sell.handlebars", {
//         });
//     });
    
//     app.get("/item", (req, res) => {
//         res.render("item.handlebars", {
//         });
//     });


    router.get("/", (req, res) => {
        res.render("index.handlebars", {
        });
    });
    
    router.get("/sell", (req, res) => {
        res.render("sell.handlebars", {
        });
    });
    
    router.get("/item", (req, res) => {
        res.render("item.handlebars", {
        });
    });


// router.get("/", function(req, res) {
//     model.selectAll(function(data) {
//         var items = {
//             items: data
//         };
//         res.render("index", items);
//     });
// });

module.exports = router;


