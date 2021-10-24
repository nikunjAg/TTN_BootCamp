import React, { Fragment } from "react";

import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";

import "./App.css";

function App() {
	return (
		<Fragment>
			<ForwardCounter />
			<BackwardCounter />
		</Fragment>
	);
}

export default App;
