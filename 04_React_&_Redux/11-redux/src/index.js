import { applyMiddleware, combineReducers, createStore } from "redux";

const counterInitState = {
	counter: 0,
};
// Counter Reducer
const counterReducer = (state = counterInitState, action) => {
	switch (action.type) {
		case "INCREMENT": {
			return { counter: state.counter + 1 };
		}
		case "DECREMENT": {
			return { counter: state.counter - 1 };
		}
		case "DOUBLE": {
			return { counter: state.counter * 2 };
		}
		default:
			return state;
	}
};

const userInitState = {
	list: [],
	loading: false,
};
// User Reducer
const userReducer = (state = userInitState, action) => {
	switch (action.type) {
		case "ADD_USER": {
			return { ...state, list: state.list.concat(action.user) };
		}
		case "DOUBLE": {
			return { ...state, loading: true };
		}
		default:
			return state;
	}
};

const filmsInitState = {
	films: [],
	loading: false,
	error: null,
};
// Films Reducer
const filmsReducer = (state = filmsInitState, action) => {
	switch (action.type) {
		case "pending": {
			return { ...state, loading: true, error: null };
		}
		case "success": {
			return { ...state, loading: false, films: action.films };
		}
		case "error": {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	counter: counterReducer,
	users: userReducer,
	films: filmsReducer,
});

// Middlewares
const logger = (store) => (next) => (action) => {
	console.log(`ACTION DISPATCHED ${action.type}`);
	next(action);
};

const multipleDispatch = (store) => (next) => (action) => {
	if (Array.isArray(action)) {
		action.forEach((act) => store.dispatch(act));
		return;
	}
	next(action);
};

const asyncMiddleware = (store) => (next) => (action) => {
	if (typeof action === "function") {
		action(store.dispatch);
		return;
	}
	next(action);
};

const mdw = applyMiddleware(asyncMiddleware, multipleDispatch, logger);

// Store
const store = createStore(rootReducer, mdw);

// Subscriptions
store.subscribe(() => {
	console.log("Store Updated: ", store.getState());
});

console.log(store.getState());

// Action Creators
const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });
const addUser = (user) => ({ type: "ADD_USER", user });
const double = () => ({ type: "DOUBLE" });

const sendRequest = (requestConfig) => {
	return (dispatch) => {
		dispatch({ type: "pending" });

		fetch(requestConfig.url, {
			method: requestConfig.method || "GET",
			body: requestConfig.body
				? JSON.stringify(requestConfig.body)
				: null,
			headers: requestConfig.headers || {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: "success", films: data.results });
			})
			.catch((e) => {
				dispatch({ type: "error", error: e });
			});
	};
};

// Dispatching Actions
store.dispatch([increment(), increment()]);

store.dispatch(addUser({ name: "Nikunj", age: 22 }));

store.dispatch(decrement());

store.dispatch(addUser({ name: "Anmol", age: 25 }));
store.dispatch(double());
store.dispatch(addUser({ name: "Harsh", age: 23 }));

store.dispatch(
	sendRequest({ url: "https://swapi.dev/api/films", method: "GET" })
);
