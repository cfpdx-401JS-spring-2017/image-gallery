import React, { Component } from 'react';
import { 
  // eslint-disable-next-line
  BrowserRouter as Router,
  Route,
  Switch,
  // eslint-disable-next-line
  Redirect
} from 'react-router-dom';

import images from './data';
import Wrapper from './components/Wrapper';
import Thumbnail from './components/thumbnail';
import ListItem from './components/ListItem';
import Gallery from './components/gallery';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  };

  handleSubmit(newImage) {
    this.setState({ data: [...this.state.data, newImage] })
  }

  handleDelete(id) {
    console.log('whatuppppp');
   images.delete(id)
    .then(() => this.forceUpdate())
}

  componentDidMount() {
    images.get()
      .then(images => {
        this.setState({ data: images });
      })
  }

  render() {

    return (
      <div className="App">
        <Wrapper
          data={this.state.data}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
