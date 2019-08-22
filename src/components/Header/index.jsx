import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {
  StyledHeader,
  StyledLogoContainer,
  StyledOptions,
  StyledOptionLink,
  StyledOptionDiv
} from './styled.header';

import { auth } from '../../firebase/firebase.utils';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, isHidden }) => (
  <StyledHeader>
    <StyledLogoContainer to='/'>
      <Logo className='logo' />
    </StyledLogoContainer>
    <StyledOptions>
      <StyledOptionLink to='/shop'>Shop</StyledOptionLink>
      <StyledOptionLink to='/shop'>Contact</StyledOptionLink>
      {currentUser ? (
        <StyledOptionDiv onClick={() => auth.signOut()}>
          Sign Out
        </StyledOptionDiv>
      ) : (
        <StyledOptionLink to='/signin'>Sign In</StyledOptionLink>
      )}
      <CartIcon />
    </StyledOptions>
    {!isHidden && <CartDropdown />}
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden
});

export default connect(mapStateToProps)(Header);
