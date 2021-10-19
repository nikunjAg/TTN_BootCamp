import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
	const modal = (
		<Fragment>
			<Backdrop onClick={props.onCancel} />
			<Card className={`${styles.modal} ${props.className || ""}`}>
				{props.children}
			</Card>
		</Fragment>
	);

	return ReactDOM.createPortal(
		modal,
		document.getElementById("overlay-root")
	);
};

export default Modal;
