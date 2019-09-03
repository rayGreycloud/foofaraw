import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity
} from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  isHidden: true
};

const {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QTY,
  TOGGLE_CART_HIDDEN,
  CLEAR_CART
} = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

export default cartReducer;
