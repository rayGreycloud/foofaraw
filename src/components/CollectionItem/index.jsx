import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import {
  StyledCollectionItem,
  StyledCollectionFooter
} from './styled.collection-item';

import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <StyledCollectionItem key={id}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <StyledCollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </StyledCollectionFooter>
      <Button onClick={() => addItemToCart(item)} invertedColors>
        Add to cart
      </Button>
    </StyledCollectionItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
