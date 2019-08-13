import React from 'react';

import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

const SigninPage = () => {
  return (
    <div className='sign-in-page'>
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninPage;
