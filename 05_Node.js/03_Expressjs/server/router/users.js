const express = require("express");

const router = express.Router();

let users = [
	{
		id: Math.random().toString(),
		firstname: "Eric",
		lastname: "Park",
		email: "eric.park@tothenew.com",
		created_on: Date.now(),
	},
	{
		id: Math.random().toString(),
		firstname: "Steven",
		lastname: "Cummings",
		email: "steven.cummins@tothenew.com",
		created_on: Date.now(),
	},
	{
		id: Math.random().toString(),
		firstname: "Cailin",
		lastname: "Rich",
		email: "cailin.rich@tothenew.com",
		created_on: Date.now(),
	},
	{
		id: Math.random().toString(),
		firstname: "Hunter",
		lastname: "Gilbert",
		email: "hunter.gilbert@tothenew.com",
		created_on: Date.now(),
	},
];

router.get("/", (req, res, next) => {
	try {
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
});

const addCreatedOn = (req, res, next) => {
	req.body.created_on = Date.now();
	next();
};

router.post("/", addCreatedOn, (req, res, next) => {
	try {
		const { firstname, lastname, email, created_on } = req.body;

		if (
			firstname.trim().length === 0 ||
			lastname.trim().length === 0 ||
			email.trim().length === 0
		) {
			const error = new Error("Please enter a valid data");
			error.code = 400;
			throw error;
		}

		const user = {
			id: Math.random().toString(),
			firstname,
			lastname,
			email,
			created_on,
		};

		users.push(user);

		res.status(200).json({
			id: user.id,
			created_on,
			message: "Users Added Successfully",
		});
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", (req, res, next) => {
	try {
		const { id } = req.params;
		console.log(id);

		const deletedUserIndex = users.findIndex((user) => user.id === id);

		let deletedUser = null;

		if (deletedUserIndex !== -1) {
			deletedUser = users[deletedUserIndex];
			users.splice(deletedUserIndex, 1);
		}
		console.log(deletedUser);

		res.status(200).json({
			user: deletedUser,
			message: deletedUser
				? "User deleted successfully"
				: "No such user exists",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = (app) => {
	app.use("/users", router);
};
