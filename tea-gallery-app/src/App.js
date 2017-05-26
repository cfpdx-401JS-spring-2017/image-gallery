import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import imageApi from './data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: null,
    };
  }
  componentDidMount() {
    imageApi.get()
      .then(images => {
        this.setState({
          images
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    return (
      <div className="App" >
        <div className="app-header">
          <h2>Welcome to the Cha'llery</h2>
          <h3>A photo gallery of <strong>茶</strong></h3>
        </div>
        {this.state.images &&
          <Wrapper
            images={this.state.images}
          />
        }
      </div >
    );
  }
}

export default App;
