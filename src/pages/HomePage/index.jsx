import React from 'react';

import { StyledHomePage } from './styled.home-page';
import Directory from '../../components/Directory';

const HomePage = () => {
  return (
    <StyledHomePage>
      <Directory />
    </StyledHomePage>
  );
};

export default HomePage;
