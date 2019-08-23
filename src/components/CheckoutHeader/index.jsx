import React from 'react';

import {
  StyledCheckoutHeader,
  StyledHeaderBlock
} from './styled.checkout-header';

const CheckoutHeader = () => {
  const headerBlocks = [
    'Product',
    'Description',
    'Quantity',
    'Price',
    'Remove'
  ];

  return (
    <StyledCheckoutHeader>
      {headerBlocks.map((blockName, idx) => (
        <StyledHeaderBlock key={idx}>
          <span>{blockName}</span>
        </StyledHeaderBlock>
      ))}
    </StyledCheckoutHeader>
  );
};

export default CheckoutHeader;
