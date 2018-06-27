const express = require("express");
const db = require("../models/");
const router = express.Router();

//GET route for all items
router.get("/", (req, res) => {
  db.Products.findAll({}).then(function(data) {
    var items = {
      item: data
    };
    console.log(items);
    res.render("index", items);
  });
});

//Get route for individual item
//When user clicks on the item, show detailed info
router.get("/item/:id", (req, res) => {
  db.Products.findOne({
    where: {
      Product_Id: req.params.param
    }
  });
  res.render("item");
});

//Get route for adding new item to sell
router.get("/sell", (req, res) => {
  res.render("sell");
});

// Post Route
router.post("/api/sell", function(req, res) {
  //   console.log(req.body);
  db.Products.create(req.body).then(function(data) {
    res.json(data);
  });
});

//Get route for any other route the user goes to
//Show Error 404
router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
