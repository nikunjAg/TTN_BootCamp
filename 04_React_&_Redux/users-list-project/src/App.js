import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userData) => {
		const user = {
			...userData,
			id: Math.random().toString(),
		};
		setUsersList((prevUsers) => [user].concat(prevUsers));
	};

	return (
		<div className="App">
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
};

export default App;
