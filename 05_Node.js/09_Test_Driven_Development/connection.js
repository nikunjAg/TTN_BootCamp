(function () {
	const mongoose = require("mongoose");

	mongoose.connect("mongodb://localhost:27017/testDb", {
		useNewUrlParser: true,
	});

	mongoose.connection.on("connected", () => {
		console.log("Connected to database.");
	});

	mongoose.connection.on("error", () => {
		console.log("Unable to connect to the database.");

		process.exit(-1);
	});
})();
