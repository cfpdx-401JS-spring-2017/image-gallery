import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';

const views = [Thumbnail, List, Gallery];

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: views[0]
    };

  }

  render() {
    const View = this.state.View;
    return (
      <div className="wrapper">
        {views.map(View =>
          <button
            key={View.name}
            onClick={() => this.setState({ View })}>
            {View.name}
          </button>)}
        <View
          images={this.props.images}
        />
      </div >
    );
  }
}

export default Wrapper;
