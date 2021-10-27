import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	console.log("Counter Rerendered");
	console.log(`Counter: ${counter}`);

	const toggleCounterHandler = () => {
		dispatch({ type: "TOGGLE_VISIBILITY" });
	};

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
			{showCounter && <div className={styles.value}>{counter}</div>}
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
