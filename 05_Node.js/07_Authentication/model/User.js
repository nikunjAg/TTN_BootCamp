const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: "String",
		userId: "String",
		token: "String",
		email: "String",
		password: "String",
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
