import React, { Component } from 'react';
import ListItem from './ListItem';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import AddImage from './AddImage';

class Wrapper extends Component {
  constructor(props) {
    super(props);

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
      <button onClick={() => this.changeView(AddImage)}>Add An Image!</button>
      <button onClick={() => this.changeView(Thumbnail)}>Thumbnail View</button>
      <button onClick={() => this.changeView(Gallery)}>Gallery View</button>
      <button onClick={() => this.changeView(ListItem)}>List View</button>
      <CurrentView 
        images={this.props.data} 
        handleSubmit={this.props.handleSubmit}
        handleDelete={this.props.handleDelete}
      />
    </div>
  );
}
}

export default Wrapper;

