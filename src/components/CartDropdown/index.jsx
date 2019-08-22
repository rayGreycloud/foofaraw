import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../Button';
import CartItem from '../CartItem';
import {
  StyledDropdown,
  StyledCartItems,
  StyledEmptyMessage
} from './styled.cart-dropdown';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
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
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
