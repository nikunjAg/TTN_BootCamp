import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import styles from "./Filter.module.css";

const Filter = (props) => {
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/all") {
			dispatch({ type: "SET_VISIBILITY_FILTER", filter: "ALL" });
		} else if (location.pathname === "/completed") {
			dispatch({ type: "SET_VISIBILITY_FILTER", filter: "COMPLETED" });
		} else if (location.pathname === "/active") {
			dispatch({ type: "SET_VISIBILITY_FILTER", filter: "ACTIVE" });
		}
	}, [location.pathname, dispatch]);

	return (
		<div className={styles.filter}>
			Show:
			<Link to="/all">All</Link>
			<Link to="/completed">Completed</Link>
			<Link to="/active">Active</Link>
		</div>
	);
};

export default Filter;
