import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
	const modal = (
		<Fragment>
			<Backdrop onClick={props.onCancel} />
			<Card className={styles.modal}>
				<div className={`${styles.content} ${props.className || ""}`}>
					{props.children}
				</div>
			</Card>
		</Fragment>
	);

	return ReactDOM.createPortal(
		modal,
		document.getElementById("overlay-root")
	);
};

export default Modal;
