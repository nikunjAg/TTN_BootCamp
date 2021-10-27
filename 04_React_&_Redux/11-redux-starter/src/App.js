import React from "react";

import "./App.css";
import Counter from "./components/Counter";

function App() {
	console.log("App Rerendered");
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

export default App;
