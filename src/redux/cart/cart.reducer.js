import { CartActionTypes } from '../action.types';
import { addItemToCart } from './cart.utils';

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
