import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
	const { status, error, sendRequest } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		// Programatically navigate the user away

		if (status === "completed" && error === null) {
			history.push("/quotes");
		}
	}, [status, error, history]);

	const addQuoteHandler = (quoteData) => {
		// Send the data to the server
		sendRequest(quoteData);
	};

	return (
		<QuoteForm
			isLoading={status === "pending"}
			onAddQuote={addQuoteHandler}
		/>
	);
};

export default NewQuote;
