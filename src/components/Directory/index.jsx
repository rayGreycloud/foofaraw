import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../MenuItem';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = ({ directory }) => ({
  sections: [...directory]
});

export default connect(mapStateToProps)(Directory);
