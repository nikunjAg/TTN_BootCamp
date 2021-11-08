import React from "react";

import "./LoadingIndicator.css";

const LoadingIndicator = (props) => (
	<div className={props.className}>
		<div className="lds-ring">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
);

export default LoadingIndicator;
