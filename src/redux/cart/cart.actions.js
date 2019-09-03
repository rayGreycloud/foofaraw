import { CartActionTypes } from './cart.types';

const {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QTY,
  TOGGLE_CART_HIDDEN,
  CLEAR_CART
} = CartActionTypes;

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const decreaseItemQty = item => ({
  type: DECREASE_ITEM_QTY,
  payload: item
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const clearCart = () => ({
  type: CLEAR_CART
});
