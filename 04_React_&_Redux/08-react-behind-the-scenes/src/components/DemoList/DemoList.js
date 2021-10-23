import React, { useMemo } from "react";

import styles from "./DemoList.module.css";

const DemoList = (props) => {
	console.log("DEMO LIST RUNNING");

	// even if other props are changing then also the list will be sorted again
	// to avoid this we can use useMemo again to avoid the repeated sorting and do it only if props.items change
	const sortedList = useMemo(() => {
		console.log("Sorting Items");
		return [...props.items].sort((a, b) => a - b);
	}, [props.items]);

	const items = sortedList.map((item) => (
		<li className={styles["list-item"]} key={item}>
			{item}
		</li>
	));

	return (
		<section className={styles["demo-list"]}>
			<h2>{props.title}</h2>
			<ul className={styles["demo-items"]}>{items}</ul>
		</section>
	);
};

export default React.memo(DemoList);
