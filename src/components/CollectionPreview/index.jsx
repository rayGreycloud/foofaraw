import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem';
import { StyledCollectionPreview } from './styled.collection-preview';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  const itemsToDisplay = items
    .filter((item, idx) => idx < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <StyledCollectionPreview>
      <h1
        className='title'
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>{itemsToDisplay}</div>
    </StyledCollectionPreview>
  );
};

export default withRouter(CollectionPreview);
