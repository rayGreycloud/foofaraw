import styled from 'styled-components';

export const StyledCheckoutPage = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  /* .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  } */
`;

export const StyledCheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const StyledCheckoutBtn = styled.span`
  margin-left: auto;
  margin-top: 3.1rem;
`;

export const StyledCheckoutItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTestWarning = styled.div`
  text-align: center;
  margin-top: 60px;
  font-size: 24px;
  color: red;
`;
