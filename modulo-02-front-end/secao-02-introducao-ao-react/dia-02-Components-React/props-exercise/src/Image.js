import React from 'react';
import staringCat from './staringCat.jpg';

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={staringCat} alt='Cute cat staring' />;
      </div>
    )
  }
}

export default Image;