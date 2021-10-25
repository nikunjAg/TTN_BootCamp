import { Fragment } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const ctx = useContext(AuthContext);

	return (
		<header className={classes.header}>
			<Link to="/">
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!ctx.isLoggedIn && (
						<li>
							<Link to="/auth">Login</Link>
						</li>
					)}
					{ctx.isLoggedIn && (
						<Fragment>
							<li>
								<Link to="/profile">Profile</Link>
							</li>
							<li>
								<button onClick={ctx.logout}>Logout</button>
							</li>
						</Fragment>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
