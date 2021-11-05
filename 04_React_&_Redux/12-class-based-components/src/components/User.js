import React, { Component } from "react";

import styles from "./User.module.css";

class User extends Component {
	componentDidMount() {
		console.log("Component Did Mount [User Component]");
	}

	componentWillUnmount() {
		console.log("Component Unmounted [User Component]");
	}

	render() {
		console.log("Render Called [User Component]");
		return <li className={styles.user}>{this.props.name}</li>;
	}
}

// const User = (props) => {
//   return <li className={styles.user}>{props.name}</li>;
// };

export default User;
