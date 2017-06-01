import React, { Component } from 'react';

class Thumbnail extends Component {

  render() {
    return(
      <div>
        <h1>HOOOOOOOOO</h1>
        <button onClick={() => this.props.ChangeView()}>Go Back</button>
      </div>
    );
  }
}

export default Thumbnail;