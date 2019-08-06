import React, { Component } from 'react';

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
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.onChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.onChange}
            required
          />
          <label htmlFor='password'>Password</label>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default Signin;
