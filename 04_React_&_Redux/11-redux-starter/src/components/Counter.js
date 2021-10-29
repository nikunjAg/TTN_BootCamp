import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	console.log("Counter Rerendered");
	console.log(`Counter: ${counter}`);

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleVisibility());
	};

	const incrementCounterHandler = () => {
		dispatch(counterActions.increment());
		console.log(`Counter In Function: ${counter}`);
	};

	const increaseCounterHandler = () => {
		dispatch(counterActions.increase({ value: 5 }));
	};

	const decrementCounterHandler = () => {
		dispatch(counterActions.decrement());
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
