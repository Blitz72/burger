// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");
// var keys = require("../keys.js");

// var connection = mysql.createConnection(
//   keys.mysqlKeys
// );

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: 'localhost',
		port: '3306',
		user: 'root',
		password: 'love2MySQL2@CWRU',
		database: 'burgers_db'
	});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;