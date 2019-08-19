import React from 'react';
import { connect } from 'react-redux';

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
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='item-name'>{name}</span>
      <span className='item-quantity'>
        <div className='arrow' onClick={() => decreaseItemQty(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className='item-price'>${price}</span>
      <div
        className='item-remove-button'
        onClick={() => removeItemFromCart(item)}
      >
        &#10005;
      </div>
    </div>
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
