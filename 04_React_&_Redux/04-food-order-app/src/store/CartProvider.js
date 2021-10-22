import React, { useReducer } from "react";

import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			const { item: newItem } = action;

			const idx = state.items.findIndex((item) => item.id === newItem.id);

			const updatedAmount =
				state.totalAmount + newItem.qty * newItem.price;

			if (idx === -1) {
				// New Item
				return {
					items: state.items.concat(newItem),
					totalAmount: updatedAmount,
				};
			} else {
				return {
					items: [
						...state.items.slice(0, idx),
						{ ...newItem, qty: state.items[idx].qty + newItem.qty },
						...state.items.slice(idx + 1),
					],
					totalAmount: updatedAmount,
				};
			}
		}
		case "REMOVE_ITEM": {
			const itemIdx = state.items.findIndex(
				(item) => item.id === action.itemId
			);

			if (itemIdx === -1) return state;

			const oldItem = state.items[itemIdx];

			let updatedPrice = state.totalAmount - oldItem.price;
			if (updatedPrice < 0) updatedPrice = 0;

			if (oldItem.qty === 1) {
				// Delete the item from cart
				return {
					items: state.items.filter(
						(item) => item.id !== action.itemId
					),
					totalAmount: updatedPrice,
				};
			} else {
				// Decrease the quantity by 1
				return {
					items: [
						...state.items.slice(0, itemIdx),
						{ ...oldItem, qty: oldItem.qty - 1 },
						...state.items.slice(itemIdx + 1),
					],
					totalAmount: updatedPrice,
				};
			}
		}

		case "CLEAR": {
			return DEFAULT_CART_STATE;
		}

		default:
			return state;
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		DEFAULT_CART_STATE
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", itemId: id });
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: "CLEAR" });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
