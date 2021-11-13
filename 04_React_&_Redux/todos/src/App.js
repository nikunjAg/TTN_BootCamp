import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import TodoApp from "./components/TodoApp";

function App() {
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.visibilityFilter);

	return (
		<>
			<header>Todos App</header>
			<main>
				<TodoApp todos={todos} filter={filter} />
			</main>
			<footer>Copyright @ 2021 - Made by Nikunj Aggarwal</footer>
		</>
	);
}

export default App;
