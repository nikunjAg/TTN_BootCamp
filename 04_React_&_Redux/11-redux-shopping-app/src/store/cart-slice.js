import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartInitialState = {
	items: [],
	totalItems: 0,
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart-slice",
	initialState: cartInitialState,
	reducers: {
		addItemToCart(state, action) {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (!item) {
				// New Item
				state.items.unshift({ ...action.payload, qty: 1 });
				state.totalItems += 1;
				state.totalAmount += action.payload.price;
				return;
			}

			// Already exists
			item.qty += 1;
			state.totalItems += 1;
			state.totalAmount += action.payload.price;
		},
		removeItemFromCart(state, action) {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (!item) {
				// Does Not Exists
				return;
			}

			// Exists
			if (item.qty === 1) {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			} else {
				item.qty -= 1;
			}

			state.totalItems -= 1;
			state.totalAmount -= action.payload.price;
		},
	},
});

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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
