import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

const quantityReducer = (acc, cur) => acc + cur.quantity;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(quantityReducer, 0)
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);
