import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import {
  StyledCollectionItem,
  StyledCollectionItemFooter,
  StyledCollectionItemName,
  StyledCollectionItemPrice
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
      <StyledCollectionItemFooter>
        <StyledCollectionItemName>{name}</StyledCollectionItemName>
        <StyledCollectionItemPrice>${price}</StyledCollectionItemPrice>
      </StyledCollectionItemFooter>
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
