import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutPage from './checkout-page.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const CheckoutPageContainer = ({ cartItems, total }) => (
  <CheckoutPage cartItems={cartItems} total={total} />
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPageContainer);
