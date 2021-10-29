import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import "./App.css";

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	console.log("App Rerendered");
	return (
		<Fragment>
			<Header />
			{!isAuthenticated && <Auth />}
			{isAuthenticated && <UserProfile />}
			<Counter />
		</Fragment>
	);
}

export default App;
