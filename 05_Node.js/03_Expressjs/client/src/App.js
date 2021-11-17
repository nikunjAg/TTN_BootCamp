import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import Layout from "./components/Layout/Layout";
import AddUser from "./pages/AddUser";
import AllUsers from "./pages/AllUsers";
import About from "./pages/About";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllUsers />
				</Route>
				<Route path="/add-user">
					<AddUser />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
