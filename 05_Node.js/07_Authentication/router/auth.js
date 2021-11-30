const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../model/User");

const router = express.Router();

router.get("/signup", (req, res, next) => {
	res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
	const { name, email, password } = req.body;

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(password, salt, async function (err, hash) {
			try {
				const response = await User.create({
					name,
					email,
					password: hash,
				});
				res.status(201).send(response);
			} catch (err) {
				next(err);
			}
		});
	});
});

// router.get("/login");

module.exports = router;
