import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput';
import Button from '../Button';
import { StyledSignin, StyledBtnGroup } from './styled.signin';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

const Signin = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  return (
    <StyledSignin>
      <h2 className='title'>I already have an account</h2>
      <span className='subtitle'>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label='Email'
          name='email'
          type='email'
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label='Password'
          name='password'
          type='password'
          value={password}
          required
        />
        <StyledBtnGroup>
          <Button type='submit'>Sign In</Button>
          <Button type='button' isGoogleSignIn onClick={googleSignInStart}>
            Sign In with Google
          </Button>
        </StyledBtnGroup>
      </form>
    </StyledSignin>
  );
  // }
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
