import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../CollectionPage';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}/`} component={CollectionsOverview} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
