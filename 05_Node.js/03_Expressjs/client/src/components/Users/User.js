import React from "react";

import styles from "./User.module.css";

const User = (props) => {
	const deleteUserHandler = () => {
		props.onDelete(props.id);
	};

	return (
		<li className={styles.user}>
			<button onClick={deleteUserHandler}>×</button>
			<p>
				<span>FirstName: </span>
				{props.firstname}
			</p>
			<p>
				<span>LastName: </span>
				{props.lastname}
			</p>
			<p>
				<span>Email: </span>
				{props.email}
			</p>
			<p>
				<span>Created On: </span>
				{new Date(props.created_on).toString()}
			</p>
		</li>
	);
};

export default User;
