import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className='collection-page'>
      <h1 className='title'>{title}</h1>
      <div className='collection-items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
