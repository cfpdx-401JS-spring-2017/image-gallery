import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: Thumbnail
    };
  }

  render() {
    return (
      <div>
        <Thumbnail
        images={this.props.images}
        />
      </div>
    );
  }
}

export default Wrapper;
