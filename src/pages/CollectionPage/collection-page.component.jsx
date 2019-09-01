import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';
import {
  StyledCollectionPage,
  StyledTitle,
  StyledCollectionItems
} from './styled.collection-page';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = props => {
  const { collection } = props;
  const { items, title } = collection;
  return (
    <StyledCollectionPage>
      <StyledTitle>{title}</StyledTitle>
      <StyledCollectionItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </StyledCollectionItems>
    </StyledCollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
