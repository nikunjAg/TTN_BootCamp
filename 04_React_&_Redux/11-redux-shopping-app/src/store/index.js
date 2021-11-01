import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import middlewares from "./middleware";

const store = configureStore({
	reducer: {
		ui: uiReducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares().concat(middlewares),
});

export default store;
