import React, { Component } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span className='subtitle'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label='email'
            name='email'
            type='email'
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label='password'
            name='password'
            type='password'
            value={password}
            required
          />
          <div className='btn-group'>
            <Button style={{ marginRight: '6px' }} type='submit'>
              Sign In
            </Button>
            <Button className='btn' onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
