import React, { Component } from 'react';

import MenuItem from '../MenuItem';
import DIRECTORY_DATA from './directory.data.js';

class Directory extends Component {
  state = {
    sections: [...DIRECTORY_DATA]
  };

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
