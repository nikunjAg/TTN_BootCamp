import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
	email: "",
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.isAuthenticated = true;
			state.email = action.payload.email;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.email = "";
		},
	},
});

const initialCounterState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, { payload }) {
			state.counter += payload.value;
		},
		toggleVisibility(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const logger = (store) => (next) => (action) => {
	console.log(`ACTION: ${action.type}`);
	next(action);
};

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
