import React from 'react';
import { withRouter } from 'react-router-dom';

import { StyledBgImg, StyledContent, StyledMenuItem } from './styled.menu-item';

const MenuItem = props => {
  const { title, history, linkUrl, match } = props;

  return (
    <StyledMenuItem onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <StyledBgImg {...props} />
      <StyledContent>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </StyledContent>
    </StyledMenuItem>
  );
};

export default withRouter(MenuItem);
