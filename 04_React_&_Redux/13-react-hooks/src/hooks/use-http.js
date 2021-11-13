import { useCallback, useReducer } from "react";

const httpReducer = (httpState, action) => {
	switch (action.type) {
		case "SEND":
			return { loading: true, error: null, data: action.data };
		case "SUCCESS":
			return { ...httpState, loading: false, data: action.data };
		case "ERROR":
			return { loading: false, error: action.error };
		case "CLEAR_ERROR":
			return { ...httpState, error: null };
		default:
			throw new Error("Should not react here.");
	}
};

const useHttp = (requestMethod, initialData = null, startLoading = false) => {
	const [httpState, dispatch] = useReducer(httpReducer, {
		loading: startLoading,
		error: null,
		data: initialData,
	});

	const sendRequest = useCallback(
		async (...requestData) => {
			dispatch({ type: "SEND", data: initialData });

			try {
				const transformedData = await requestMethod(requestData);
				dispatch({ type: "SUCCESS", data: transformedData });
			} catch (error) {
				dispatch({
					type: "ERROR",
					error: error.message || "Something went wrong!",
				});
			}
		},
		[requestMethod, initialData]
	);

	return {
		loading: httpState.loading,
		error: httpState.error,
		sendRequest,
		data: httpState.data,
	};
};

export default useHttp;
