import React, { Component } from 'react';
import ListItem from './ListItem';
import Gallery from './gallery';
import Thumbnail from './thumbnail';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      CurrentView: ListItem
    }
    this.changeView = this.changeView.bind(this);
  };


  changeView(View = ListItem) {
    this.setState({ CurrentView: View })
  };

  render() {
    const { CurrentView } = this.state;

    return (
      <div>
        <button onClick={() => this.changeView(Thumbnail)}>Thumbnail View</button>
        <button onClick={() => this.changeView(Gallery)}>Gallery View</button>
        <button onClick={() => this.changeView(ListItem)}>List View</button>
        <CurrentView images={this.props.data} />
      </div>
    );
  }
}

export default Wrapper;

