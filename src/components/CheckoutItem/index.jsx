import React from 'react';
import { connect } from 'react-redux';

import {
  StyledCheckoutItem,
  StyledImageContainer,
  StyledItemSection,
  StyledQuantity,
  StyledRemoveButton
} from './styled.checkout-item';

import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQty
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  item,
  addItemToCart,
  removeItemFromCart,
  decreaseItemQty
}) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <StyledCheckoutItem>
      <StyledImageContainer>
        <img src={imageUrl} alt={name} />
      </StyledImageContainer>
      <StyledItemSection>{name}</StyledItemSection>
      <StyledQuantity>
        <div className='arrow' onClick={() => decreaseItemQty(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </StyledQuantity>
      <StyledItemSection>${price}</StyledItemSection>
      <StyledRemoveButton onClick={() => removeItemFromCart(item)}>
        &#10005;
      </StyledRemoveButton>
    </StyledCheckoutItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  decreaseItemQty: item => dispatch(decreaseItemQty(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
