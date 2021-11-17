import React from "react";

import styles from "./Users.module.css";
import User from "./User";
import Spinner from "../UI/Spinner";

const Users = (props) => {
	const users = props.users.map((user) => (
		<User key={user.id} {...user} onDelete={props.onDeleteUser} />
	));

	let content = props.loading ? (
		<Spinner className={styles["spinner-wrapper"]} />
	) : (
		<ul className={styles["users-list"]}>{users}</ul>
	);

	return <section className={styles["users"]}>{content}</section>;
};

export default Users;
