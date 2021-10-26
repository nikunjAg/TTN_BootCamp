import React, { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = (props) => {
	const {
		status,
		error,
		data: quotes,
		sendRequest: fetchQuotes,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		fetchQuotes();
	}, [fetchQuotes]);

	useEffect(() => {
		return () => {
			console.log("Unmounted All Quotes");
		};
	}, []);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (
		status === "completed" &&
		error === null &&
		(!quotes || quotes.length === 0)
	) {
		return <NoQuotesFound />;
	}

	console.log("All Quotes Component");
	return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
