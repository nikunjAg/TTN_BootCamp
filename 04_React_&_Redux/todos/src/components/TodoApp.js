import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import styles from "./TodoApp.module.css";
import Filter from "./Filter";

let nextTodoId = 0;

const TodoApp = (props) => {
	const dispatch = useDispatch();

	const inputRef = useRef();

	const addTodoHandler = () => {
		dispatch({
			type: "ADD_TODO",
			text: inputRef.current.value,
			id: nextTodoId++,
		});
		inputRef.current.value = "";
		inputRef.current.focus();
	};

	const toggleTodoHandler = (id) => {
		dispatch({
			type: "TOGGLE_TODO",
			id,
		});
	};

	const todosList = props.todos
		.filter((todo) => {
			if (props.filter === "COMPLETED") {
				return todo.completed;
			} else if (props.filter === "ACTIVE") {
				return !todo.completed;
			}
			return true;
		})
		.map((todo) => (
			<li
				key={todo.id}
				className={`${styles.todo} ${
					todo.completed && styles["todo-finished"]
				}`}
				onClick={toggleTodoHandler.bind(null, todo.id)}
			>
				{todo.text}
			</li>
		));

	return (
		<div className={styles.todosApp}>
			<input type="text" ref={inputRef} />
			<button onClick={addTodoHandler}>Add Todo</button>
			<ul className={styles.todos}>{todosList}</ul>
			<Filter />
		</div>
	);
};

export default TodoApp;
