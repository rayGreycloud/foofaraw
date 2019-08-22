import styled, { css } from 'styled-components';
const baseButtonStyles = css`
  background-color: var(--almost_black);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--white);
    color: var(--almost_black);
    border: 1px solid var(--almost_black);
  }
`;

const invertedColorStyles = css`
  background-color: var(--white);
  color: var(--almost_black);
  border: 1px solid var(--almost_black);

  &:hover {
    background-color: var(--almost_black);
    color: var(--white);
    border: none;
  }
`;

const googleSigninStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: var(--google_blue);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--google_blue_hover);
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSigninStyles;
  }

  return props.invertedColors ? invertedColorStyles : baseButtonStyles;
};

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
