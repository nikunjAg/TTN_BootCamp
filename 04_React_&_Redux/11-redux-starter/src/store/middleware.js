const logger = (store) => (next) => (action) => {
	console.log(`ACTION: ${action.type}`);
	next(action);
};

const middlewares = [logger];

export default middlewares;
