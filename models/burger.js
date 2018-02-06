var orm = require("../config/orm.js");

var burger = {
	selectAll: function(onComplete) {
		orm.selectAll(function(results) {
			onComplete(results);
		});
	},
	insertOne: function(burger, onComplete) {
		orm.insertOne(burger, function(results) {
			onComplete(results);
		});
	},
	updateOne: function(id, onComplete) {
		orm.updateOne(id, function(results) {
			onComplete(results);
		});
	}
};

module.exports = burger;