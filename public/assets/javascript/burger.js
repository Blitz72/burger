$(function() {
	$(".create-form").on("submit", function(event) {
		event.preventDefault();
		var burgerName = "";
		if ($("#new-burger-name").val().trim() === "") {
			alert("Please enter a name for your burger.");
		} else {
			burgerName = $("#new-burger-name").val().trim();
			var newBurger = {
				burger: burgerName
			};
			console.log(newBurger);
			location.reload();
			$.ajax("/api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {
				$("#new-burger-name").val("");
				console.log("New burger created.");
				// location.reload(true);
			});
		}
		
	});

	$(".eat-burger").on("click", function(event) {
		var id = $(this).data("id");
		location.reload();
		$.ajax("api/burgers/" + id, {
			type: "PUT",
			data: id
		}).then(function() {
			console.log("Devoured burger #", id);
			// location.reload(true);
		});
	});


});