import React, { Component } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';
import { StyledSignup } from './styled.signup';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export class Signup extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // clear form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <StyledSignup>
        <h2 className='title'>I do not have an account</h2>
        <span className='subtitle'>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label='Display Name'
            name='displayName'
            type='text'
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label='Email'
            name='email'
            type='email'
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label='Password'
            name='password'
            type='password'
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
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
  }
}

export default Signup;
