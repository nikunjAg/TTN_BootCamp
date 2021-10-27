import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";

const Counter = () => {
	console.log("Counter Rerendered");

	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	console.log(`Counter: ${counter}`);

	const toggleCounterHandler = () => {};

	const incrementCounterHandler = () => {
		dispatch({ type: "INCREMENT" });
		console.log(`Counter In Function: ${counter}`);
	};

	const increaseCounterHandler = () => {
		dispatch({ type: "INCREASE", value: 5 });
	};

	const decrementCounterHandler = () => {
		dispatch({ type: "DECREMENT" });
	};

	return (
		<main className={styles.counter}>
			<h1>Redux Counter</h1>
			<div className={styles.value}>{counter}</div>
			<div className={styles.actions}>
				<button onClick={incrementCounterHandler}>INCREMENT</button>
				<button onClick={increaseCounterHandler}>Increase by 5</button>
				<button onClick={decrementCounterHandler}>DECREMENT</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
