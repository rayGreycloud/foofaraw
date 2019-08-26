import styled from 'styled-components';

export const StyledBgImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const StyledContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--almost_black);
  background-color: var(--white);
  opacity: 0.7;
  position: absolute;

  .title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-size: 22px;
    color: var(--darker_grey);
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const StyledMenuItem = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--almost_black);
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & ${StyledBgImg} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${StyledContent} {
      opacity: 0.9;
    }
  }
`;
