import React from "react";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
