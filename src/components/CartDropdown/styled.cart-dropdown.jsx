import styled, { css } from 'styled-components';

const dropdownButtonStyles = css`
  button {
    margin-top: auto;
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--almost_black);
  background-color: var(--white);
  top: 90px;
  right: 40px;
  z-index: 5;

  ${dropdownButtonStyles}
`;

export const StyledCartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-y: auto;
`;

export const StyledEmptyMessage = styled.span`
  font-size: 1.1rem;
  margin: 3rem auto;
`;
