const Item = require("./model");

module.exports.getAll = async () => {
	const items = await Item.find();
	return items;
};

module.exports.create = async ({
	name,
	quantity,
	isSanitized,
	unit,
	expiryDate,
	category,
	location,
}) => {
	const oldItem = await Item.findOne({ name: name });

	if (!oldItem) {
		const item = await Item.create({
			name,
			quantity,
			isSanitized,
			unit,
			expiryDate,
			category,
			location,
		});
		return item;
	}

	// If an item already exists
	oldItem.name = name;
	oldItem.quantity = quantity;
	oldItem.isSanitized = isSanitized;
	oldItem.unit = unit;
	oldItem.expiryDate = expiryDate;
	oldItem.category = category;
	oldItem.location = location;
	const updatedItem = await oldItem.save();
	return updatedItem;
};

// We have a PATCH request
module.exports.update = async ({ id }, itemData) => {
	const updatedItem = Item.findOneAndUpdate(id, itemData, { new: true });
	return updatedItem;
};

module.exports.delete = async ({ id }) => {
	const deletedItem = await Item.findOneAndDelete({ _id: id });
	return deletedItem;
};
