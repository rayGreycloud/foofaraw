import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
`;

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const StyledLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: unset;
`;

export const StyledOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledOptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const StyledOptionDiv = styled.div`
  ${OptionContainerStyles}
  cursor: pointer;
  color: var(--darker_grey);
  font-weight: bolder;
`;
