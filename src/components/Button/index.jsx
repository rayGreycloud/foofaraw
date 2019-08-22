import React from 'react';

import { StyledButton } from './styled.button';

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
export default Button;
