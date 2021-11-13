import React, { useState } from "react";

const AuthContext = React.createContext({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = () => {
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	const initialValue = {
		isAuthenticated: isLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={initialValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
