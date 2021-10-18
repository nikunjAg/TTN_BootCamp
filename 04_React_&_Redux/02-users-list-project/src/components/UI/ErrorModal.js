import React from "react";

import Modal from "./Modal";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	let modalContent = <p>Something went wrong.</p>;

	if (props.errors?.length) {
		modalContent = (
			<ul>
				{props.errors.map((e, id) => (
					<li key={id}>{e}</li>
				))}
			</ul>
		);
	}

	return (
		<Modal onClose={props.onCancel} className={styles["error-modal"]}>
			<header>
				<h2>{props.title || "Error"}</h2>
			</header>
			<div className={styles.content}>{modalContent}</div>
			<footer className={styles.footer}>
				<Button onClick={props.onCancel}>Cancel</Button>
				<Button onClick={props.onSuccess}>
					{props.successLabel || "Ok"}
				</Button>
			</footer>
		</Modal>
	);
};

export default ErrorModal;
