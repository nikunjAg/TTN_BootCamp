import React, { useContext } from "react";

import "./App.css";
import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import AuthContext from "./components/store/auth-context";

function App() {
	const authContext = useContext(AuthContext);

	return (
		<div className="App">
			{!authContext.isAuthenticated && <Auth />}
			{authContext.isAuthenticated && <Ingredients />}
		</div>
	);
}

export default App;
