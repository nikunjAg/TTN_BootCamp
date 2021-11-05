import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
	{ id: "u1", name: "User A" },
	{ id: "u2", name: "User B" },
	{ id: "u3", name: "User C" },
];

class Users extends Component {
	state = {
		showUsers: true,
	};

	toggleUsersHandler() {
		this.setState((prev) => ({ showUsers: !prev.showUsers }));
		// setShowUsers((curState) => !curState);
	}

	render() {
		const usersList = (
			<ul>
				{DUMMY_USERS.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{this.state.showUsers ? "Hide" : "Show"} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

/* const Users = () => {
	const [showUsers, setShowUsers] = useState(true);

	const toggleUsersHandler = () => {
		setShowUsers((curState) => !curState);
	};

	const usersList = (
		<ul>
			{DUMMY_USERS.map((user) => (
				<User key={user.id} name={user.name} />
			))}
		</ul>
	);

	return (
		<div className={classes.users}>
			<button onClick={toggleUsersHandler}>
				{showUsers ? "Hide" : "Show"} Users
			</button>
			{showUsers && usersList}
		</div>
	);
}; */

export default Users;
