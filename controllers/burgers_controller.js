var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
    response.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(request, response) {
	burger.insertOne(request.body.burger, function(data) {
		console.log(data);
	});
});

router.put("/api/burgers/:id", function(request, response) {
	var id = request.params.id;
	burger.updateOne(id, function(result) {
		console.log(result);
	});
});

module.exports = router;