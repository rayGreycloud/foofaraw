import React from 'react';

import { StyledSpinnerContainer, StyledSpinnerOverlay } from './styled.spinner';

const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <StyledSpinnerOverlay>
        <StyledSpinnerContainer />
      </StyledSpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;
