import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';
import '../styles/Gallery.css';

export default class Gallery extends Component {

  static propTypes = {
    poms: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired
    }))
  };

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

    index += increment;
    if (index === poms.length) {
      index = 0;
    } if (index === -1 || isNaN(index)) {
      index = poms.length - 1;
    }
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
        <GalleryImage
          poms={poms[index]}
          onDelete={() => this.props.handleDelete(poms[index]._id, index)}
        />
        <button className="button gallery-btn" onClick={() => (
          this.changePom(+1)
        )}>
          Next
        </button>
      </div>
    );
  }
}