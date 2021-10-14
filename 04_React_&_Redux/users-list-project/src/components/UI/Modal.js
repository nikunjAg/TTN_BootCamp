import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Backdrop from "./Backdrop";
import styles from "./Modal.module.css";

const Modal = (props) => {
	const classes = `${styles.modal} ${props.className || ""}`;
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<Card className={classes}>{props.children}</Card>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default Modal;
