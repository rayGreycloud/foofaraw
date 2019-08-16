import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import { auth } from '../../firebase/firebase.utils';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, isHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option option-signout' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!isHidden && <CartDropdown />}
  </div>
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  isHidden: selectCartIsHidden(state)
});

export default connect(mapStateToProps)(Header);
