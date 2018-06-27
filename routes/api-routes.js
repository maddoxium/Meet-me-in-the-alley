// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the Products
  app.get("/api/Products/", function (req, res) {
    db.Alley.findAll({})
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // Get route for returning Products of a specific ID, name, category or price
  app.get("/api/Products/Products/:term", function (req, res) {
    db.Alley.findAll({
      where: {
        $or: [
          Product_ID, { $eq: term },

          Product_name, { $eq: term },

          Category, { $eq: term },

          Price, { $eq: term }


        ]
      }
    });

  })
    // .then(function (dbAlley) {
    //   res.json(dbAlley);
    // });


  // Get route for retrieving a single post
  app.get("/api/Products/:id", function (req, res) {
    db.Alley.findOne({
      where: {
        Product_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // POST route for saving a new post
  app.post("/api/Products", function (req, res) {
    console.log(req.body);
    db.Alley.create({
      Product_Name: req.body.Product_Name,
      Category: req.body.category,
      Picture: req.body.picture,
      Description: req.body.description,
      Price: req.body.price
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // DELETE route for deleting Productscts
  app.delete("/api/Products/:id", function (req, res) {
    db.Alley.destroy({
      where: {
        Product_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // PUT route for updating Products
  app.put("/api/Products", function (req, res) {
    db.Alley.update(req.body,
      {
        where: {
          Product_ID: req.body.id
        }
      })
      .then(function (dbAlley) {
        res.json(dbAlley);
      })
  });
  // =============================================================SELLER ROUTES
  app.get("/api/Seller/", function (req, res) {
    db.Alley.findAll({})
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // Get route for returning Seller of a specific ID, Last name, City, Zip, email
  app.get("/api/Seller/Seller/:term", function (req, res) {
    db.Alley.findAll({
      where: {
        $or: [
          Seller_ID, { $eq: term },

          Last_name, { $eq: term },

          City, { $eq: term },

          Zip, { $eq: term },

          Email, { $eq: term }
        ]
      }
    });

  })

    // .then(function (dbAlley) {
    //   res.json(dbAlley);
    // });


  // Get route for retrieving a single seller
  app.get("/api/Seller/:id", function (req, res) {
    db.Alley.findOne({
      where: {
        Seller_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // POST route for saving a new post
  app.post("/api/Seller", function (req, res) {
    console.log(req.body);
    db.Alley.create({
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Address: req.body.address,
      City: req.body.state,
      State: req.body.zip,
      Phone: req.body.phone,
      Email: req.body.email,
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // DELETE route for deleting Seller
  app.delete("/api/Seller/:id", function (req, res) {
    db.Alley.destroy({
      where: {
        Seller_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // PUT route for updating Products
  app.put("/api/Seller", function (req, res) {
    db.Alley.update(req.body,
      {
        where: {
          Seller_ID: req.body.id
        }
      })
      .then(function (dbAlley) {
        res.json(dbAlley);
      })
  });

  // =============================================================BUYER ROUTES
  app.get("/api/Buyer/", function (req, res) {
    db.Alley.findAll({})
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // Get route for returning Buyer of a specific ID, Last name, City, Zip, email
  app.get("/api/Buyer/Buyer/:term", function (req, res) {
    db.Alley.findAll({
      where: {
        $or: [
          Buyer_ID, { $eq: term },

          Last_name, { $eq: term },

          City, { $eq: term },

          Zip, { $eq: term },

          Email, { $eq: term }


        ]
      }
    })

  })

    // .then(function (dbAlley) {
    //   res.json(dbAlley);
    // });


  // Get route for retrieving a single Buyer
  app.get("/api/Buyer/:id", function (req, res) {
    db.Alley.findOne({
      where: {
        Buyer_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // POST route for saving a new post
  app.post("/api/Buyer", function (req, res) {
    console.log(req.body);
    db.Alley.create({
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Address: req.body.address,
      City: req.body.state,
      State: req.body.zip,
      Phone: req.body.phone,
      Email: req.body.email,
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // DELETE route for deleting Buyer
  app.delete("/api/Buyer/:id", function (req, res) {
    db.Alley.destroy({
      where: {
        Buyer_ID: req.params.id
      }
    })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // PUT route for updating Products
  app.put("/api/Buyer", function (req, res) {
    db.Alley.update(req.body,
      {
        where: {
          Buyer_ID: req.body.id
        }
      })
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  })
};
