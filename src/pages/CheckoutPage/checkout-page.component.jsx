import React from 'react';

import CheckoutHeader from '../../components/CheckoutHeader';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';
import {
  StyledCheckoutPage,
  StyledCheckoutBtn,
  StyledCheckoutTotal,
  StyledCheckoutItems,
  StyledTestWarning
} from './styled.checkout-page';

const CheckoutPage = ({ cartItems, total }) => (
  <StyledCheckoutPage>
    <CheckoutHeader />
    <StyledCheckoutItems>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </StyledCheckoutItems>
    <StyledCheckoutTotal>
      <span>TOTAL ${total}</span>
    </StyledCheckoutTotal>
    <StyledCheckoutBtn>
      <StripeCheckoutButton price={total} />
    </StyledCheckoutBtn>

    <StyledTestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </StyledTestWarning>
  </StyledCheckoutPage>
);

export default CheckoutPage;
