import React from "react";

import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Nikunj", text: "Learning React" },
	{ id: "q2", author: "Nikunj", text: "JS is FUN!!" },
];

const QuoteDetail = (props) => {
	const { id } = useParams();
	const match = useRouteMatch();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === id);

	if (!quote) return <p>No such quote found.</p>;

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
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;
