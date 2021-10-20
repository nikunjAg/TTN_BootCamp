import React from "react";

import { Route } from "react-router-dom";

const Welcome = () => {
	return (
		<section>
			<div>Welcome Page</div>

			<Route path="/welcome/new-user">
				<p>Child Route</p>
			</Route>
		</section>
	);
};

export default Welcome;
