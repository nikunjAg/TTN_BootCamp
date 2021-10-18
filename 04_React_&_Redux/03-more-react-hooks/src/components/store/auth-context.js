import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

// AuthContext is not a component itself
// but it is an object which contains Component
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogin: function (username, password) {},
	onLogout: function () {},
});

export const AuthCtxProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loginStatus = localStorage.getItem("isLoggedIn");
		if (loginStatus === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (username, password) => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

// Why we should not import ReactCtxProvider in App.js ?

// const ComponentA = (props) => {
//     return <ComponentB>
//         <div className="ComponentA" >
//             <h1>This is Component A</h1>
//         </div>
//     </ComponentB>
// };

// const ComponentB = props => {
//     return <div className="ComponentB" >
//         {props.children}
//     </div>
// };

// ReactDOM.render(<ComponentA />, document.getElementById('app'));

// DOM

// <html>
//     <body>
//         <div id="app" >
//             <div className="ComponentB" >
//                 <div className="ComponentA" >
//                     <h1>This is Component A</h1>
//                 </div>
//             </div>
//         </div>
//     </body>
// </html>

// In this pattern if we look at the DOM / Component Tree in Raect debugger tools or the component structure in our react code it seems as if ComponentB is the parent component of the componentA.

// But this is incorrect because for a parent child relation the state change or ay rerender of parent component should trigger a rerender of the child component but here if there is any state change in componentB then the componentA will not be reevaluated.

// But if do any state change in ComponentA then ComponentB will be rerendered.
