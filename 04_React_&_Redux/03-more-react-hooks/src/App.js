import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthCtxProvider } from "./components/store/auth-context";

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	/* const loggedInStatus = localStorage.getItem("isLoggedIn");
	if (loggedInStatus === "1") {
		setIsLoggedIn(true);
	} */

	const ctx = useContext(AuthContext);

	/* useEffect(() => {
		console.log("UseEffect Running");
		const loggedInStatus = localStorage.getItem("isLoggedIn");
		if (loggedInStatus === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	}; */

	return (
		<React.Fragment>
			<MainHeader />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	);
}

export default App;
