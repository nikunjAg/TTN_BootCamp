const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Item name is required"],
		},
		quantity: {
			type: Number,
			required: [true, "Item quantity is required"],
		},
		isSanitized: {
			type: Number,
			default: false,
		},
		unit: {
			type: String,
			required: true,
		},
		expiryDate: {
			type: Date,
			set: (date) => new Date(date),
		},
		category: [
			{
				type: String,
				enum: {
					values: [
						"Grocery",
						"Medical",
						"Fruits&Veg",
						"Berverages",
						"Babycare",
						"Cleaning",
					],
					message: "{VALUE} is not supported",
				},
			},
		],
		location: [
			{
				type: String,
				enum: {
					values: ["Store", "Kitchen"],
					message: "{VALUE} is not supported",
				},
			},
		],
	},
	{
		timestamps: {
			createdAt: "createdDate",
			updatedAt: "updatedDate",
		},
	}
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
