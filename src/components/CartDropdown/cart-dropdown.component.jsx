import React from 'react';

import Button from '../Button';
import CartItem from '../CartItem';
import {
  StyledDropdown,
  StyledCartItems,
  StyledEmptyMessage
} from './styled.cart-dropdown';

const CartDropdown = ({ cartItems, handleClick }) => (
  <StyledDropdown>
    <StyledCartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
      )}
    </StyledCartItems>
    <Button onClick={handleClick}>GO TO CHECKOUT</Button>
  </StyledDropdown>
);

export default CartDropdown;
