import {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QTY,
  TOGGLE_CART_HIDDEN
} from './cart.types';

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
