import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview';

import SHOP_DATA from './shop.data.js';

class ShopPage extends Component {
  state = {
    collections: [...SHOP_DATA]
  };

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
