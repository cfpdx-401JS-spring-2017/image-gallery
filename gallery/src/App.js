import React, { Component } from 'react';
import './App.css';
import data from './data/data.js';
import List from './List';
import ThumbNail from './ThumbNail';
import Gallery from './Gallery';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
    }

  }

  componentDidMount() {
    data.get()
    .then(images => {
      this.setState({images: images});  
    });
  }

  render() {
    return (
      <div className="App">
        <List images={this.state.images} />
        <ThumbNail 
          className="ThumbNail"
          images={this.state.images} 
        />
        <Gallery 
          className="Gallery"
          images={this.state.images}
        />
      </div>  
    );
  }
}

export default App;
