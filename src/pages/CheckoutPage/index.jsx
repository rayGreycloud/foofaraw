import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutHeader from '../../components/CheckoutHeader';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <CheckoutHeader />
    <div className='checkout-items'>
      {cartItems.map(cartItem => cartItem.name)}
    </div>
    <div className='checkout-total'>
      <span>TOTAL ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
