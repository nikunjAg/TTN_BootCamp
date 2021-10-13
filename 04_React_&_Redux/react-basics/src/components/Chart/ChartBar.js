import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
	let height = "0%";

	if (props.maxValue > 0) {
		height = Math.round((props.value / props.maxValue) * 100) + "%";
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					style={{ height: height }}
					className="chart-bar__fill"
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
}

export default ChartBar;
