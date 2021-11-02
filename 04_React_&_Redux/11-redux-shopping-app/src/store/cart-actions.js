import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(
				"https://react-redux-app-e61b4-default-rtdb.firebaseio.com/cart.json"
			);

			if (!response.ok) {
				throw new Error("Could not fetch data from cart!");
			}

			const data = await response.json();
			return data;
		};

		try {
			const cartData = await sendRequest();
			dispatch(cartActions.setCart(cartData));
		} catch (e) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Fetching cart data failed!",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending Request...",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-redux-app-e61b4-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success",
					message: "Sent cart data successfully",
				})
			);
		} catch (e) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};
