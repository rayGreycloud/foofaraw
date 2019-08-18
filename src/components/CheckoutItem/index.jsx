import React from 'react';

const CheckoutItem = ({ item: { id, imageUrl, name, price, quantity } }) => (
  <div key={id} className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='item-name'>{name}</span>
    <span className='item-quantity'>{quantity}</span>
    <span className='item-price'>${price}</span>
    <div className='item-remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
