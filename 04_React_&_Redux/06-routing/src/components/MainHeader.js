import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
	console.log("MainHeader Component Re-rendered");
	return (
		<header className={styles.header}>
			<h1>Routing Intro</h1>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={styles.active} exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to="/welcome">
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to="/products">
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
