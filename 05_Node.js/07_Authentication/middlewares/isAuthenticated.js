module.exports = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		req.flash("error_msg", "Please login to view this protected resource");
		res.redirect("/users/login");
	}
};
