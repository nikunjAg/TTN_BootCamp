import { useDispatch } from "react-redux";

import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../store/ui-slice";

const MainHeader = (props) => {
	const dispatch = useDispatch();

	const toggleCartHandler = () => {
		dispatch(uiActions.toggleCart());
	};

	return (
		<header className={classes.header}>
			<h1>ReduxCart</h1>
			<nav>
				<ul>
					<li>
						<CartButton onClick={toggleCartHandler} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
