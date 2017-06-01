import React, { Component } from 'react';
import './styles/App.css';
import ListItem from './components/ListItem';
import Gallery from './components/Gallery';
import Thumbnail from './components/Thumbnail';
import images from './data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      CurrentView: ListItem
    };

    this.changeView = this.changeView.bind(this);

  };

  componentDidMount() {
    images.get()
      .then(images => {
        this.setState({ data: images });
      })
  }

  changeView(View = ListItem, data) {
    this.setState({ CurrentView: View, data })
  };

  render() {
    const { CurrentView } = this.state;

    return (
      <div className="App">
        <ListItem images={this.state.data} />
        <CurrentView changeView={this.changeView} />
      </div>
    );
  }
}

export default App;
