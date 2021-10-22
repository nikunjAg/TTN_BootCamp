import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Nikunj", text: "Learning React" },
	{ id: "q2", author: "Nikunj", text: "JS is FUN!!" },
];

const AllQuotes = (props) => {
	console.log("All Quotes Component");
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
