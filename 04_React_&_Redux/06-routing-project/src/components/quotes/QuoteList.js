import { Fragment } from "react";

import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
	console.log("Quote List Rerendered");

	const history = useHistory();
	const location = useLocation();
	// const match = useRouteMatch();

	const queryParams = new URLSearchParams(location.search);

	const isSortingAsc = queryParams.get("sort") === "asc";

	const changeSortingHandler = () => {
		const destination = {
			pathname: location.pathname,
			search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
		};
		history.push(destination);
	};

	// We are using the spread as sort directly on props.quotes will mutate it and we should not do that
	const sortedQuotes = [...props.quotes].sort((a, b) => {
		if (isSortingAsc) {
			return a.text < b.text ? -1 : 1;
		} else {
			return a.text > b.text ? -1 : 1;
		}
	});

	const quotes = sortedQuotes.map((quote) => (
		<QuoteItem
			key={quote.id}
			id={quote.id}
			author={quote.author}
			text={quote.text}
		/>
	));

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAsc ? "Des" : "As"}cending
				</button>
			</div>
			<ul className={classes.list}>{quotes}</ul>
		</Fragment>
	);
};

export default QuoteList;
