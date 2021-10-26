import React from "react";

import { Link, NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to="/">Routing</Link>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink activeClassName={styles.active} to="/quotes">
							Quotes
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={styles.active}
							to="/new-quote"
						>
							New Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
