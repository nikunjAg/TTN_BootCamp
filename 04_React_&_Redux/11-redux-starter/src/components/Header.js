import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	console.log("Header Rerendered");

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{isAuthenticated && (
						<Fragment>
							<li>
								<a href="/">My Products</a>
							</li>
							<li>
								<a href="/">My Sales</a>
							</li>
							<li>
								<button onClick={logoutHandler}>Logout</button>
							</li>
						</Fragment>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
