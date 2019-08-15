import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className='collection-item' key={id}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button onClick={() => addItemToCart(item)} invertedColors>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
