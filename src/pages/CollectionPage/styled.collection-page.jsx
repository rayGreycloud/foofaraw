import styled from 'styled-components';

export const StyledCollectionPage = styled.div`
  display: flex;
  flex-direction: column;

  /* .title {
    font-size: 38px;
    margin: 0 auto 30px;
  } */
`;

export const StyledTitle = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const StyledCollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
