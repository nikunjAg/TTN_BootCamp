import { createStore } from "redux";

const INITIAL_STATE = {
	counter: 0,
};

// Reducer
const counterReducer = (state = INITIAL_STATE, action) => {
	console.log(action.type);

	switch (action.type) {
		case "INCREMENT": {
			return { counter: state.counter + 1 };
		}
		case "DECREMENT": {
			return { counter: state.counter - 1 };
		}
		default:
			return state;
	}
};

// Store
const store = createStore(counterReducer);

// Subscriptions
store.subscribe(() => {
	console.log("C1: Redux Store Updated: ", store.getState());
});

store.subscribe(() => {
	console.log("C2: Redux Store Updated: ", store.getState());
});

console.log(store.getState());

// Action Creators
const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

// Dispatching Actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
