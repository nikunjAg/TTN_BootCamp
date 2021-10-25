import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	console.log("AuthContextProvider Re-evaluated");

	const tokenData = localStorage.getItem("token");

	const [token, setToken] = useState(tokenData);

	const logoutHandler = useCallback(() => {
		clearTimeout(logoutTimer);
		console.log("CLEARING DATA");
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		setToken(null);
	}, []);

	const loginHandler = (tokenVal, expirationTime) => {
		localStorage.setItem("token", tokenVal);
		localStorage.setItem("expirationTime", expirationTime);
		logoutTimer = setTimeout(logoutHandler, expirationTime - Date.now());
		setToken(tokenVal);
	};

	useEffect(() => {
		if (token) {
			let expirationTime =
				localStorage.getItem("expirationTime") - Date.now();

			// Less or equal to 1 minute
			if (expirationTime <= 60000) expirationTime = 0;

			logoutTimer = setTimeout(logoutHandler, expirationTime);
		}
	}, [token, logoutHandler]);

	const authValue = {
		token: token,
		isLoggedIn: !!token,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={authValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
