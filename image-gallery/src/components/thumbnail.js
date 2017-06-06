import React, { Component } from 'react';

class Thumbnail extends Component {

  render() {
    const {images, handleDelete} = this.props;

    return (
      <div>
        {images.map(image => (
          <ul key={image._id}>
            <li>{image.title}</li>
            <li><img src={image.url} alt={'Riot Grrrl'} height={150} width={150} /></li>
            <button onClick={() => {
              handleDelete(image._id)}
              }>Delete
            </button>
          </ul>
        ))}
      </div>
    );
  }
}

export default Thumbnail;