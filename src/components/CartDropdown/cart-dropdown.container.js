import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartDropdown from './cart-dropdown.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdownContainer = ({ cartItems, history, toggleCartHidden }) => {
  const handleClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };
  return <CartDropdown cartItems={cartItems} handleClick={handleClick} />;
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdownContainer)
);
