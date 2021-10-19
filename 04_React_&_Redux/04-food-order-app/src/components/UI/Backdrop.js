import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	const backdrop = (
		<div
			onClick={props.onClick}
			style={{
				position: "fixed",
				top: "0",
				left: "0",
				right: "0",
				bottom: "0",
				zIndex: "100",
				background: "rgba(0,0,0,0.48)",
			}}
		></div>
	);
	return ReactDOM.createPortal(
		backdrop,
		document.getElementById("backdrop-root")
	);
};

export default Backdrop;
