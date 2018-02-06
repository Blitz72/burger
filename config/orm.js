var connection = require("./connection.js");

var orm = {
	selectAll: function(onComplete) {
		var dbQuery = "SELECT * FROM burgers;";
		connection.query(dbQuery, function(error, result) {
			if (error) {
				throw error;
			}
			onComplete(result);
		});
	},
	insertOne: function(burger, onComplete) {
		var dbQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burger + "');";
		connection.query(dbQuery, function(error, result) {
			if (error) {
				throw error;
			}
			onComplete(result);
		});
	},
	updateOne: function(id, onComplete) {
		var dbQuery = "UPDATE burgers SET devoured = 1 WHERE id = " + id + ";";
		connection.query(dbQuery, function(error, result) {
			if (error) {
				throw error;
			}
			onComplete(result);
		});
	}
}

module.exports = orm;