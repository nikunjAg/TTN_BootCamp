import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
	const maxValue = props.dataPoints.reduce(
		(maxV, curr) => Math.max(maxV, curr.value),
		0
	);

	const chartBars = props.dataPoints.map((e, id) => (
		<ChartBar
			key={id}
			label={e.label}
			value={e.value}
			maxValue={maxValue}
		/>
	));

	return <div className="chart">{chartBars}</div>;
}

export default Chart;
