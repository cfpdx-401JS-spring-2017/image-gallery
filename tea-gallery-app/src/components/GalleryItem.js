import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

class GalleryItem extends Component {

  static PropTypes = {
    images: PropTypes.array.required,
    onDeleteImage: PropTypes.func.required
  };

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  changeImage(increment) {
    const images = this.props.images;
    let index = this.state.index;
    const image = images[index];

    index += increment;
    if (index === images.length) index = 0;
    if (index === -1 || isNaN(index)) index = images.length - 1;

    this.setState({ index: index });
    this.setState({ images: image });
  }

  render() {
    const { images} = this.props;
    return (
      <div className="gallery-img-wrapper">
        <img className="gallery-img" src={images[this.state.index].url} alt="../img/broken-glass.jpg"></img>
        <button className="back-button" onClick={() => this.changeImage(-1)}>Back</button>
        <button className="next-button" onClick={() => this.changeImage(+1)}>Next</button> {/* add arrow img?*/}
        <DeleteButton
          images={images}
          onDeleteImage={() => this.props.onDeleteImage(images[this.state.index]._id)}
        />
      </div>
    );
  }
}

export default GalleryItem;