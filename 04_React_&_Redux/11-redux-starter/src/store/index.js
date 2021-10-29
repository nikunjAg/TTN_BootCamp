import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: INITIAL_STATE,
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
	reducer: counterSlice.reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const counterActions = counterSlice.actions;
export default store;
