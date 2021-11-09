import { useReducer } from "react";

const httpReducer = (httpState, action) => {
	switch (action.type) {
		case "SEND":
			return { loading: true, error: null };
		case "SUCCESS":
			return { ...httpState, loading: false };
		case "ERROR":
			return { loading: false, error: action.error };
		case "CLEAR_ERROR":
			return { ...httpState, error: null };
		default:
			throw new Error("Should not react here.");
	}
};

const useHttp = (startLoading = false) => {
	const [httpState, dispatch] = useReducer(httpReducer, {
		loading: startLoading,
		error: null,
	});

	const sendRequest = async (requestConfig, applyData) => {
		dispatch({ type: "SEND" });

		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method || "GET",
				body: requestConfig.body
					? JSON.stringify(requestConfig.body)
					: null,
				headers: requestConfig.headers || {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) throw new Error("Something went wrong!");

			const data = await response.json();
			dispatch({ type: "SUCCESS" });

			applyData(data);
		} catch (error) {
			dispatch({
				type: "ERROR",
				error: error.message || "Something went wrong!",
			});
		}
	};

	return { loading: httpState.loading, error: httpState.error, sendRequest };
};

export default useHttp;
