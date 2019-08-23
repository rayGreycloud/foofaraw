import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  StyledCartIcon,
  StyledShoppingIcon,
  StyledItemsCount
} from './styled.cart-icon';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <StyledCartIcon onClick={toggleCartHidden}>
    <StyledShoppingIcon as={ShoppingIcon} />
    <StyledItemsCount>{itemsCount}</StyledItemsCount>
  </StyledCartIcon>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
