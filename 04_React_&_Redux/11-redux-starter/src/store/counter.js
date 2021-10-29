import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
