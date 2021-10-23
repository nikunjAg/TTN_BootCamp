import React from "react";

// Here in this component despite the fact that neither its state nor its props changed its still re-evaluated because its parent component is reevaluated and because component instances are just function calls in JSX (<DemoOutput />) so every re-evaluation of a component will cause a reevaluation of its childrens (even - nested children due to same fact that parent is re-evaluated).

// But remember that re-evaluation !== re-render in React, React will compare the virtual DOM tree in memory with previous DOM tree and will pass on the differences to the ReactDOM which will then efficiently add those changes to the actual DOM in the browser.
const DemoOutput = (props) => {
	console.log("DEMO OUTPUT RUNNING");

	return <p>{props.show ? "This is a new Paragraph" : ""}</p>;
};

export default React.memo(DemoOutput);
