import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import '../styles/Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  changePom(increment) {
    const poms = this.props.poms;
    const pom = this.props.poms[this.state.index];
    let index = this.state.index;
    console.log(poms);
    console.log(increment);

    index += increment;
    if (index === poms.length) {
      index = 0;
    } if (index === -1 || isNaN(index)) {
      index = poms.length - 1;
    }
    console.log(index);
    this.setState({ poms: pom });
    this.setState({ index });
  }

  render() {
    const { poms } = this.props;
    const { index } = this.state;
    return (
      <div>
        <button className="button gallery-btn" onClick={() => (
          this.changePom(-1)
        )}>
          Previous
        </button>
        <GalleryImage poms={poms[index]} />
        <button className="button gallery-btn" onClick={() => (
          this.changePom(+1)
        )}>
          Next
        </button>
      </div>
    );
  }
}