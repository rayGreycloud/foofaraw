import React from 'react';
import { withRouter } from 'react-router-dom';

import { StyledBgImg, StyledContent, StyledMenuItem } from './styled.menu-item';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <StyledMenuItem
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <StyledBgImg imageUrl={imageUrl} />
    <StyledContent>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </StyledContent>
  </StyledMenuItem>
);

export default withRouter(MenuItem);
