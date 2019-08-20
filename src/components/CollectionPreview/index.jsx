import React from 'react';

import CollectionItem from '../CollectionItem';

const CollectionPreview = ({ title, items }) => {
  const itemsToDisplay = items
    .filter((item, idx) => idx < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{itemsToDisplay}</div>
    </div>
  );
};

export default CollectionPreview;
