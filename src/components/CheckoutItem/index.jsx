import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItemFromCart }) => {
  const { id, imageUrl, name, price, quantity } = item;

  return (
    <div key={id} className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='item-name'>{name}</span>
      <span className='item-quantity'>{quantity}</span>
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
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
