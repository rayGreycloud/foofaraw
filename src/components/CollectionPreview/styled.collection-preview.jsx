import styled from 'styled-components';

export const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    width: max-content;
    font-size: 28px;
    margin-bottom: 25px;

    &:hover {
      cursor: pointer;
    }
  }

  .preview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;
