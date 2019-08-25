import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: var(--almost_black);
`;

export const StyledFormGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const StyledFormInputLabel = styled.label`
  color: var(--grey);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles};
  }
`;

export const StyledFormInput = styled.input`
  background: none;
  background-color: var(--white);
  color: var(--grey);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--grey);
  margin: 25px 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus ~ ${StyledFormInputLabel} {
    ${shrinkLabelStyles};
  }
`;
