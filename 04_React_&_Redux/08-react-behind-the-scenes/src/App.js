import React, { useState, useCallback, useMemo } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/DemoList/DemoList";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggling, setAllowToggling] = useState(false);
	const [listTitle, setListTitle] = useState("");

	console.log("APP RUNNING");

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggling) {
			setShowParagraph((prev) => !prev);
		}
	}, [allowToggling]);

	const allowTogglingHandler = () => {
		setAllowToggling(true);
	};

	const changeTitleHandler = useCallback(() => {
		setListTitle("New Title");
	}, []);

	const demoListItems = useMemo(() => [1, 4, 2, 5, 3], []);

	return (
		<div className="app">
			<h1>Hi there!</h1>

			{/* Demo List */}
			<DemoList title={listTitle} items={demoListItems} />
			<Button onClick={changeTitleHandler}>Change Title</Button>

			{/* Paragraph Toggling */}
			<DemoOutput show={showParagraph} />
			<Button onClick={allowTogglingHandler}>Allow Toggling</Button>
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
