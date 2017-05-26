import React, { Component } from 'react';

class GalleryItem extends Component {
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
    return (
      <div className="gallery-img-wrapper">
        <img className="gallery-img" src={this.props.images[this.state.index].url} alt="../img/broken-glass.jpg"></img>
        <button className="back-button" onClick={() => this.changeImage(-1)}>Back</button>
        <button className="next-button" onClick={() => this.changeImage(+1)}>Next</button> {/* add arrow img?*/}
      </div>
    );
  }
}

export default GalleryItem;