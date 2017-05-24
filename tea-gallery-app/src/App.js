import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import imageApi from './data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: null,
      error: ''
    };
  }
  componentDidMount() {
    imageApi.get()
      .then(images => {
        this.setState({
          error: '',
          images
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  // imageApi
  //     .then(images => {
  //       console.log('got images');
  //   this.setState({
  //     error: '',
  //     images
  //   });
  // })
  //     .catch(error => {
  //       this.setState({
  //     error
  //   });
  // });

  render() {
    return (
      <div className="App" >
        {
          this.state.images &&
          <Wrapper
            images={this.state.images}
          />
        }
      </div >
    );
  }
}

export default App;
