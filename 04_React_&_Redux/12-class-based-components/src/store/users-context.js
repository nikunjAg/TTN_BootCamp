import React, { Component } from "react";

const UsersContext = React.createContext({
	users: [],
});

export default UsersContext;

const DUMMY_USERS = [
	{ id: "u1", name: "User A" },
	{ id: "u2", name: "User B" },
	{ id: "u3", name: "User C" },
];

export class UsersContextProvider extends Component {
	render() {
		return (
			<UsersContext.Provider value={{ users: DUMMY_USERS }}>
				{this.props.children}
			</UsersContext.Provider>
		);
	}
}
