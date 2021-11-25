const express = require("express");
const mongoose = require("mongoose");

const itemRouter = require("./item/routes");

const app = express();
const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/myapp";

app.use(express.json());

itemRouter(app);

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB");
});

mongoose.connection.on("err", (err) => {
	console.log("Unable to connect to MongoDB: ", err);
});

app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}`);
});
