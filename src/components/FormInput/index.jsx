import React from 'react';

import {
  StyledFormGroup,
  StyledFormInput,
  StyledFormInputLabel
} from './styled.form-input';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <StyledFormGroup>
      <StyledFormInput onChange={handleChange} {...otherProps} />
      {label && (
        <StyledFormInputLabel
          className={otherProps.value.length ? 'shrink' : ''}
          htmlFor={otherProps.name}
        >
          {label}
        </StyledFormInputLabel>
      )}
    </StyledFormGroup>
  );
};

export default FormInput;
