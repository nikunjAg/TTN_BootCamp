import React, { useEffect, useState } from "react";

import axios from "../axios";

export const UsersContext = React.createContext({
	users: [],
	loading: false,
	addUser: (user) => {},
	removeUser: (id) => {},
});

const UsersContextProvider = (props) => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const { data: fetchedUsers } = await axios.get("/users");
				setUsers(fetchedUsers);
				setLoading(false);
			} catch (err) {
				throw err;
			}
		};

		fetchUsers().catch((err) => {
			setLoading(false);
			console.log(err.message);
		});
	}, []);

	const addUser = (user) => {
		setUsers((prevUsers) => prevUsers.concat(user));
	};

	const removeUser = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
	};

	const initialValue = {
		users: users,
		loading: loading,
		addUser: addUser,
		removeUser: removeUser,
	};

	return (
		<UsersContext.Provider value={initialValue}>
			{props.children}
		</UsersContext.Provider>
	);
};

export default UsersContextProvider;
