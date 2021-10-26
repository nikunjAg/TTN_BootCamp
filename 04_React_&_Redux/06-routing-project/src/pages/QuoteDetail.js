import React, { useEffect } from "react";

import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = (props) => {
	const { id: quoteId } = useParams();
	const match = useRouteMatch();

	const {
		status,
		error,
		data: quote,
		sendRequest: fetchQuote,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		fetchQuote(quoteId);
	}, [fetchQuote, quoteId]);

	useEffect(() => {
		return () => {
			console.log("Quote Detail Unmounted");
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
		return <div className="centered focused">{error}</div>;
	}

	if (!quote.text) {
		return <p className="centered focused">No such quote found.</p>;
	}

	return (
		<section>
			<HighlightedQuote author={quote.author} text={quote.text} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>
			<Route path={match.path + "/comments"}>
				<Comments quoteId={quoteId} />
			</Route>
		</section>
	);
};

export default QuoteDetail;
