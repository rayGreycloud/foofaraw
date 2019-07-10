import React, { Component } from 'react';

import MenuItem from '../Menu-item';
import { directoryData } from './directory.data.js';

class Directory extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     sections: [...directoryData]
  //   };
  // }
  state = {
    sections: [...directoryData]
  };

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
