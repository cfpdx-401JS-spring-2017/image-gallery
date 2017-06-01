import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';

const views = [Thumbnail, List, Gallery];

class Wrapper extends Component {

  static propTypes = {
    images: PropTypes.array,
  }
  constructor(props) {
    super(props);

    this.state = {
      View: views[0]
    };

  }

  render() {
    const View = this.state.View;
    const { match } = this.props; 
    return (
      <div className="wrapper">
        {views.map(View =>
          <button
            key={View.name}
            onClick={() => {
              this.props.history.push({
                search: `view=${View.name}`
              });
              this.setState({ View });}
              }>
            {View.name}
          </button>)}
        <View
          images={this.props.images}
          onDeleteImage={this.props.onDeleteImage}
        />
      </div >
    );
  }
}

export default Wrapper;
