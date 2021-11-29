const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bcrypt", { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
	console.log("MongoDB Connection error: ", err);
	process.exit(-1);
});
