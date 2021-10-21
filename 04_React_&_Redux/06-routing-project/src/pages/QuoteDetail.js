import React from "react";

import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
	const { id } = useParams();

	return (
		<section>
			<h2>Quote</h2>
			<p>Quote Id - {id}</p>
			<Route path={`/quotes/${id}/comments`}>
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;
