import React from "react";

const backdropStyle = {
	position: "fixed",
	left: "0",
	top: "0",
	right: "0",
	bottom: "0",
	background: "rgba(0, 0, 0, 0.62)",
	zIndex: "900",
};

const Backdrop = (props) => {
	return (
		<div onClick={props.onClose} style={backdropStyle}>
			{props.children}
		</div>
	);
};

export default Backdrop;
