import React, { Component } from 'react';

class Thumbnail extends Component {

  render() {
    let {images} = this.props;

    return (
      <div>
        {images.map(image => (
          <ul>
            <li>{image.title}</li>
            <li><img src={image.url} alt={'Riot Grrrl'} height= {100} width= {100} /></li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Thumbnail;