import { Fragment, useState, useEffect } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";

const DUMMY_USERS = [
	{ id: "u1", name: "User A" },
	{ id: "u2", name: "User B" },
	{ id: "u3", name: "User C" },
];

const UserFinder = () => {
	// const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
	const [searchTerm, setSearchTerm] = useState("");

	/* useEffect(() => {
		setFilteredUsers(
			DUMMY_USERS.filter((user) =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [searchTerm]); */

	const searchChangeHandler = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredUsers = DUMMY_USERS.filter((user) =>
		user.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Fragment>
			<div className={styles.finder}>
				<input type="search" onChange={searchChangeHandler} />
			</div>
			<Users users={filteredUsers} />
		</Fragment>
	);
};

export default UserFinder;
