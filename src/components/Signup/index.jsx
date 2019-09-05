import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput';
import Button from '../Button';
import { StyledSignup } from './styled.signup';

import { signUpStart } from '../../redux/user/user.actions';

const Signup = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;

  return (
    <StyledSignup>
      <h2 className='title'>I do not have an account</h2>
      <span className='subtitle'>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label='Display Name'
          name='displayName'
          type='text'
          value={displayName}
          required
        />
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
        <FormInput
          handleChange={handleChange}
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </StyledSignup>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
