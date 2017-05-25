import React, { Component } from 'react';
import GalleryImage from './GalleryImage';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poms: this.props.poms,
      index: 0
    };
  }

  nextPom(index) {
    const poms = this.props.poms[index];
    this.setState({ poms });
  }

  previousPom(index) {
    const poms = this.props.poms[index];
    this.setState({ poms });
  }

  render() {
    const poms = this.props.poms;
    const index = this.state.index;
    return (
      <div>
        <button className="button gallery-btn" onClick={() => (
          this.previousPom(index.length - 1)
        )}>
        Previous
        </button>
        <GalleryImage poms={poms[index]} />
        <button className="button gallery-btn" onClick={() => (
          this.nextPom(index + 1)
        )}>
        Next
        </button>
      </div>
    );
  }
}