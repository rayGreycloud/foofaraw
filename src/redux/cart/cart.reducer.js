import { CartActionTypes } from '../action.types';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity
} from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  isHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };

    default:
      return state;
  }
};

export default cartReducer;
