import React from 'react';

const CheckoutHeader = () => {
  const headerBlocks = [
    'Product',
    'Description',
    'Quantity',
    'Price',
    'Remove'
  ];

  return (
    <div className='checkout-header'>
      {headerBlocks.map((blockName, idx) => (
        <div className='header-block' key={idx}>
          <span>{blockName}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckoutHeader;
