const user = require("./service");

module.exports.getAll = async (req, res, next) => {
	try {
		const response = await user.getAll();
		res.send(response);
	} catch (err) {
		next(err);
	}
};

module.exports.create = async (req, res, next) => {
	try {
		const response = await user.create(req.body);
		res.send(response);
	} catch (err) {
		next(err);
	}
};

module.exports.update = async (req, res, next) => {
	try {
		const response = await user.update(req.param, req.body);
		res.send(response);
	} catch (err) {
		next(err);
	}
};

module.exports.delete = async (req, res, next) => {
	try {
		const response = await user.delete(req.params);
		res.send(response);
	} catch (err) {
		next(err);
	}
};

const handleValidationError = (err, res) => {
	const errors = Object.values(err.errors).map((el) => el.message);
	const fields = Object.values(err.errors).map((el) => el.path);
	const code = 400;
	if (errors.length > 1) {
		const formattedErrors = errors.join("");
		res.status(code).send({ messages: formattedErrors, fields: fields });
	} else {
		res.status(code).send({ messages: errors, fields: fields });
	}
};

module.exports.errorHandler = (err, req, res, next) => {
	try {
		if (err.name === "ValidationError")
			return (err = handleValidationError(err, res));
	} catch (err) {
		res.status(500).send({ error: "An unknown error occurred." });
	}
};
