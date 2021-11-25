const express = require("express");

const item = require("./controller");

const router = express.Router();

// Get all the items
router.get("/items", item.getAll);

// Create a new item and update if already present(check by name)
router.post("/items", item.create);

// Update existing items
router.patch("/item/:id", item.update);

// Delete an item
router.delete("/item/:id", item.delete);

// router.use(item.errorHandler);
router.use(item.errorHandler);

module.exports = (app) => {
	app.use(router);
};
