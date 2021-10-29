import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";
import middlewares from "./middleware";

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middlewares),
});

// Store
export default store;
