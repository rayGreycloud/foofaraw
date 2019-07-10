import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{ background: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
