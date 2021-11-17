import React, { useContext } from "react";
import { useHistory } from "react-router";

import AddUserForm from "../components/Users/AddUserForm";
import { UsersContext } from "../store/UsersContext";
import axios from "../axios";

const AddUser = () => {
	const ctx = useContext(UsersContext);
	const history = useHistory();

	const userSubmitHandler = (userData) => {
		axios
			.post("/users", userData)
			.then(({ data }) => {
				const userId = data.id;
				console.log(data.message);
				ctx.addUser({ ...userData, id: userId });
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				history.push("/");
			});
	};

	return <AddUserForm onSubmit={userSubmitHandler} />;
};

export default AddUser;
