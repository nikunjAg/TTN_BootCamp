const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		res.status(200).json({
			created_by: "Nikunj Aggarwal",
			employedAt: "ToTheNew",
			technologies_used: ["Node.js", "ExpressJS"],
		});
	} catch (err) {
		next(err);
	}
});

module.exports = (app) => {
	app.use("/about", router);
};
