const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");

const router = express.Router();

router.get("/", isAuthenticated, (req, res, next) => {
	res.render("index", { user: req.user });
});

module.exports = router;
