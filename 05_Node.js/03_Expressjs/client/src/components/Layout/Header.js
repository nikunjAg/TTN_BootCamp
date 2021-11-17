import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={styles["main-header"]}>
			<div className={styles["main-header__logo"]}>Client</div>
			<nav className={styles["main-header__nav"]}>
				<ul className={styles["main-header__item-list"]}>
					<li className={styles["main-header__item"]}>
						<NavLink exact to="/" activeClassName={styles.active}>
							Home
						</NavLink>
					</li>
					<li className={styles["main-header__item"]}>
						<NavLink to="/add-user" activeClassName={styles.active}>
							Add User
						</NavLink>
					</li>
					<li className={styles["main-header__item"]}>
						<NavLink to="/about" activeClassName={styles.active}>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
