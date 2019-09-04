import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, isHidden, signOutStart, history }) => {
  const handleSignOut = () => {
    signOutStart();
    history.push('/');
  };

  return (
    <StyledHeader>
      <StyledLogoContainer to='/'>
        <Logo className='logo' />
      </StyledLogoContainer>
      <StyledOptions>
        <StyledOptionLink to='/shop'>Shop</StyledOptionLink>
        <StyledOptionLink to='/shop'>Contact</StyledOptionLink>
        {currentUser ? (
          <StyledOptionDiv onClick={handleSignOut}>Sign Out</StyledOptionDiv>
        ) : (
          <StyledOptionLink to='/signin'>Sign In</StyledOptionLink>
        )}
        <CartIcon />
      </StyledOptions>
      {!isHidden && <CartDropdown />}
    </StyledHeader>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
