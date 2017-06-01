import React, { Component } from 'react';

class Gallery extends Component {

  render() {
    return(
      <div>
        <h1>HIIIIIII</h1>
        <button onClick={() => this.props.ChangeView()}></button>
      </div>
    );
  }
}

export default Gallery;