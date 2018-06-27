
const express = require("express");
const model = require("../models/alley.js");
const router = express.Router();

// router.get("/", function(req, res) {                            
//     model.selectAll(function(data) { 
//             res.render("auth.handlebars")               // FOR AUTH PAGE - DLO   
//     });
//  });

// router.get("/home", function(req, res) {                            
//     model.selectAll(function(data) { 
//         res.render("index.handlebars", {                 // FOR AUTH PAGE - DLO
//             items: data 
//         });                      
//     });
//  });

router.get("/", function(req, res) {                            
    model.selectAll(function(data) { 
        res.render("index.handlebars", {
            items: data 
        });                      
    });
 });

router.get("/item/:id", function(req, res) {
    var prodNum = req.params.id.replace(":","");
    model.selectOne(prodNum, function(data) {
        res.render("item.handlebars", ({
            items: data
        }))
    })
});

router.get("/sell", (req, res) => {
    res.render("sell.handlebars");
});

router.post("/sell/updateOne", function(req, res) {
    var title = req.params.title;
    console.log("title @ alleyController ", title);
    var desc = req.params.description;
    console.log("description @ alleyController ", desc);
    var cat = req.params.category;
    console.log("category @ alleyContoller", cat);
    var price = req.params.price;
    console.log("price @ alleyContoller", price);
    model.updateOne(title, desc, cat, price, function() {
        alert("Item Added");
        res.redirect("/home");
    })

});
router.get("*", (req, res) => {
    res.render("404.handlebars");
});

module.exports = router;