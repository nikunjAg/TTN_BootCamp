const express = require("express");

const User = require("./model/User");

require("./connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json({ message: "Users fetched", users });
	} catch (err) {
		res.json(err);
	}
});

app.post("/users", async (req, res, next) => {
	try {
		const { name, email, age } = req.body;

		const user = await User.create({
			name,
			email,
			age,
		});

		res.status(201).json({ message: "User created successfully.", user });
	} catch (err) {
		res.json(err);
	}
});

app.get("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		res.status(200).json({ message: "User found.", user });
	} catch (err) {
		res.json(err);
	}
});

app.put("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		if (!user) {
			throw new Error("No such user exists");
		}
		const updatedUser = await Object.assign(user, req.body).save();

		res.json({ message: "User updated.", user: updatedUser });
	} catch (err) {
		if (err.message === "No such user exists") {
			return res.json({ message: err.message });
		}
		res.json(err);
	}
});

app.delete("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const result = await User.deleteOne({ _id: id });
		res.status(200).json({ message: "User deleted.", result });
	} catch (err) {
		res.json(err);
	}
});

app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
