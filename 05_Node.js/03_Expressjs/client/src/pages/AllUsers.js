import React, { useContext } from "react";

import Users from "../components/Users/Users";
import { UsersContext } from "../store/UsersContext";
import axios from "../axios";

const AllUsers = () => {
	const { users, loading, removeUser } = useContext(UsersContext);

	const deleteUserHandler = (id) => {
		axios
			.delete("/users/" + id)
			.then(({ data }) => {
				console.log(data.message);
				removeUser(id);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<Users
			users={users}
			loading={loading}
			onDeleteUser={deleteUserHandler}
		/>
	);
};

export default AllUsers;
