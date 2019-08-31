import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput';
import Button from '../Button';
import { StyledSignin, StyledBtnGroup } from './styled.signin';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

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
    const { googleSignInStart } = this.props;

    return (
      <StyledSignin>
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
          <StyledBtnGroup>
            <Button type='submit'>Sign In</Button>
            <Button type='button' isGoogleSignIn onClick={googleSignInStart}>
              Sign In with Google
            </Button>
          </StyledBtnGroup>
        </form>
      </StyledSignin>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
