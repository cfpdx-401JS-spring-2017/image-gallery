import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexTracker: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  };

  increment() {
    let current = this.state.indexTracker;
    if (current === this.props.images.length - 1) {
      this.setState({ indexTracker: current = 0 })
    }
    else {
      this.setState({ indexTracker: current += 1 })
    };
  }

  decrement() {
    let current = this.state.indexTracker -1;
    if (current === -1) {
      this.setState({ indexTracker: current = this.props.images.length -1 })
    }
    else {
      this.setState({ indexTracker: current })
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.images[this.state.indexTracker].url} alt={'Riot Grrrl'} />
        <h1>{this.props.images[this.state.indexTracker].title}</h1>
        <button onClick={this.decrement}>Back</button>
        <button onClick={this.increment}>Next</button>
      </div>
    );
  }
}

Gallery.propTypes = {
  indexTracker: PropTypes.number
};

export default Gallery;