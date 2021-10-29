import React, { Fragment } from "react";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import "./App.css";

function App() {
	console.log("App Rerendered");
	return (
		<Fragment>
			<Header />
			<Auth />
			<Counter />
		</Fragment>
	);
}

export default App;
