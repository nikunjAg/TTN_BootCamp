import { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	// Makes this component and Error Boundary
	// This component will be triggered whenever one of the child components throw an error
	componentDidCatch(error) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<h3 style={{ textAlign: "center", color: "#fff" }}>
					Something went wrong...
				</h3>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
