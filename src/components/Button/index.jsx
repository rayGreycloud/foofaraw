import React from 'react';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
