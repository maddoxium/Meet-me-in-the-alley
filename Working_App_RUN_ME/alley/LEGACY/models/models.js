
const orm = require("../config/orm.js");

var items = {
    selectAll: function(callback) {
        orm.selectAll("items", function(res) {
            callback(res);
        });
    }
}

module.exports = items;
