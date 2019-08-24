import React from 'react';

import CollectionItem from '../CollectionItem';
import { StyledCollectionPreview } from './styled.collection-preview';

const CollectionPreview = ({ title, items }) => {
  const itemsToDisplay = items
    .filter((item, idx) => idx < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <StyledCollectionPreview>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{itemsToDisplay}</div>
    </StyledCollectionPreview>
  );
};

export default CollectionPreview;
