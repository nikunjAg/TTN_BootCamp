import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
	static contextType = UsersContext;

	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: "",
		};
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	componentDidMount() {
		// do nothing as the search term is empty
		console.log("Component Did Mount [UsersFinder]");

		setTimeout(() => {
			this.setState({ filteredUsers: this.context.users });
		}, 1000);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Component Did Update [UsersFinder]");

		if (prevState.searchTerm !== this.state.searchTerm) {
			const filteredUsers = this.context.users.filter((user) =>
				user.name
					.toLowerCase()
					.includes(this.state.searchTerm.toLowerCase())
			);

			this.setState({ filteredUsers: filteredUsers });
		}
	}

	render() {
		console.log("Render Called [UsersFinder]");
		return (
			<Fragment>
				<div className={styles.finder}>
					<input
						type="search"
						onChange={this.searchChangeHandler.bind(this)}
					/>
				</div>
				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	}
}

/* const UserFinder = () => {
	// const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
	const [searchTerm, setSearchTerm] = useState("");

	// useEffect(() => {
	// 	setFilteredUsers(
	// 		DUMMY_USERS.filter((user) =>
	// 			user.name.toLowerCase().includes(searchTerm.toLowerCase())
	// 		)
	// 	);
	// }, [searchTerm]);

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
}; */

export default UserFinder;
