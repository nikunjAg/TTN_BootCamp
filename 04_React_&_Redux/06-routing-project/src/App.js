import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
	console.log("App Component Re-rendered");

	return (
		<Layout>
			<Switch>
				<Route path="/quotes/:id">
					<QuoteDetail />
				</Route>
				<Route path="/quotes">
					<AllQuotes />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
				<Route path="/">
					<Redirect to="/quotes" />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
