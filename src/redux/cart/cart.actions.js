import { CartActionTypes } from '../action.types';

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
