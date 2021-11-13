import { combineReducers, createStore } from "redux";

// Concerns with how a particular todo is updated
// OR state refers to a todo
const todo = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return { id: action.id, text: action.text, completed: false };
		case "TOGGLE_TODO": {
			if (state.id !== action.id) return state;
			return {
				...state,
				completed: !state.completed,
			};
		}
		default:
			return state;
	}
};

// Should only address how todos list is updated
// OR state refers to todo list
const todos = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, todo(undefined, action)];
		case "TOGGLE_TODO":
			return state.map((t) => todo(t, action));
		default:
			return state;
	}
};

const visibilityFilter = (state = "", action) => {
	switch (action.type) {
		case "SET_VISIBILITY_FILTER":
			return action.filter;
		default:
			return state;
	}
};

/* const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.filter, action)
  }
}; */
const todoApp = combineReducers({
	todos,
	visibilityFilter,
});

const store = createStore(todoApp);
export default store;
