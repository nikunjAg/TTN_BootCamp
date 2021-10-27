import { createStore } from "redux";

const INITIAL_STATE = {
	counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
	console.log(`Action: ${action.type}`);
	switch (action.type) {
		case "INCREMENT":
			return { counter: state.counter + 1 };
		case "INCREASE":
			return { counter: state.counter + action.value };
		case "DECREMENT":
			return { counter: state.counter - 1 };
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
