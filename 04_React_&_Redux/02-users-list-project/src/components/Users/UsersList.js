import React from "react";

import User from "./User";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
	let usersContent = (
		<p className={styles["users-list__fallback"]}>No users added.</p>
	);

	if (props.users.length > 0) {
		usersContent = (
			<ul className={styles["users-list"]}>
				{props.users.map((user) => (
					<User key={user.id} {...user} />
				))}
			</ul>
		);
	}

	return (
		<Card className={styles["users-wrapper"]}>
			<h3>Users List</h3>
			{usersContent}
		</Card>
	);
};

export default UsersList;
