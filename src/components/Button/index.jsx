import React from 'react';

const Button = ({
  children,
  invertedColors,
  isGoogleSignIn,
  ...otherProps
}) => {
  const buttonClasses = `btn ${invertedColors ? 'inverted-colors' : ''} ${
    isGoogleSignIn ? 'google-sign-in' : ''
  }`;
  return (
    <button className={buttonClasses} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
