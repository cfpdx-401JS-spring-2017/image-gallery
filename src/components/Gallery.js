import React, { Component } from 'react';
import GalleryImage from './GalleryImage';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poms: this.props.poms,
      current: null
    };
  }

  nextPom() {
    this.setState();
  }

  previousPom() {
    this.setState();
  }

  render() {
    const poms = this.props.poms;
    let index = 0;
    return (
      <div>
        <GalleryImage poms={ poms[index] }/>
      </div>
    );
  }
}