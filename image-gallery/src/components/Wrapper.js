import React, { Component } from 'react';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      CurrentView: ListItem
    }
  };

  this.changeView = this.changeView.bind(this);

changeView(View = ListItem, data) {
  this.setState({ CurrentView: View, data })
};

render() {
  const { CurrentView } = this.state;

  return (
    <div>
      <CurrentView changeView={this.changeView}>
    </div>
      );
    }
}
export default Wrapper;

