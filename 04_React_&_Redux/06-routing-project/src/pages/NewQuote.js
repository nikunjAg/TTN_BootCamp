import React from "react";

import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
	const history = useHistory();

	console.log(history);

	const addQuoteHandler = (quoteData) => {
		// Send the data to the server
		console.log(quoteData);

		// Programatically navigate the user away
		history.push("/quotes");
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
