import React from 'react';

import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
import { StyledSigninPage } from './styled.signin-page';

const SigninPage = () => {
  return (
    <StyledSigninPage>
      <Signin />
      <Signup />
    </StyledSigninPage>
  );
};

export default SigninPage;
