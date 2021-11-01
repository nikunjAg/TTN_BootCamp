const logger = (store) => (next) => (action) => {
	console.log(`Action Type: ${action.type}`);
	next(action);
};

const multiMdw = (store) => (next) => (action) => {
	if (Array.isArray(action)) {
		action.forEach((act) => store.dispatch(act));
		return;
	}
	next(action);
};

const asyncMdw = (store) => (next) => (action) => {
	if (typeof action === "function") {
		action(store.dispatch);
		return;
	}
	next(action);
};

const mdw = [asyncMdw, multiMdw, logger];

export default mdw;
