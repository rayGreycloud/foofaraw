import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutHeader from '../../components/CheckoutHeader';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <CheckoutHeader />
    <div className='checkout-items'>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <div className='checkout-total'>
      <span>TOTAL ${total}</span>
    </div>

    <StripeCheckoutButton price={total} />
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
