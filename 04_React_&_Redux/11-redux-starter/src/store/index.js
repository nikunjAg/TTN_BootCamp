import { createStore } from "redux";

const INITIAL_STATE = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = INITIAL_STATE, action) => {
	console.log(`Action: ${action.type}`);
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 };
		case "INCREASE":
			return { ...state, counter: state.counter + action.value };
		case "DECREMENT":
			return { ...state, counter: state.counter - 1 };
		case "TOGGLE_VISIBILITY":
			return {
				...state,
				showCounter: !state.showCounter,
			};
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
