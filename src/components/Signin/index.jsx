import React, { Component } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    }
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
          <div className='btn-group'>
            <Button style={{ marginRight: '6px' }} type='submit'>
              Sign In
            </Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
