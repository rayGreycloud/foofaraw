import React from 'react';

import {
  StyledCartItem,
  StyledItemDetails,
  StyledItemName
} from './styled.cart-item';

const CartItem = ({ item: { id, imageUrl, name, price, quantity } }) => (
  <StyledCartItem key={id}>
    <img src={imageUrl} alt='item' />
    <StyledItemDetails>
      <StyledItemName>{name}</StyledItemName>
      <span>
        {quantity} x ${price}
      </span>
    </StyledItemDetails>
  </StyledCartItem>
);

export default CartItem;
