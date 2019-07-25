import React, { Component } from 'react';

import SHOP_DATA from './shop.data.js';

class ShopPage extends Component {
  state = {
    collections: [...SHOP_DATA]
  };

  render() {
    const { collections } = this.state;

    return <div className='shoppage'>SHOP PAGE</div>;
  }
}

export default ShopPage;
