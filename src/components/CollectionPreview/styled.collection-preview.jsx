import styled from 'styled-components';

export const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;
