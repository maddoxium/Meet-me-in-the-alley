const orm = require("../config/orm.js");

var items = {
  selectAll: function(callback) {
    orm.selectAll("Products", function(res) {
      callback(res);
    });
  }
};

module.exports = items;
