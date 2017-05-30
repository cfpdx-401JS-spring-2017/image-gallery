import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import imageApi from './data.js';
import AddImage from './components/AddImage';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: null,
    };

    this.onAddImage = this.onAddImage.bind(this);
    this.onDeleteImage = this.onDeleteImage.bind(this);
    this.onAddImage = this.onAddImage.bind(this);
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

  onDeleteImage(id) {
    imageApi.deleteImage(id)
      .then(() => {
        const images = this.state.images;
        const index = images.findIndex(img => img._id === id);
        images.splice(index, 1);
        this.setState({ images });
      });
  }

  onAddImage(image) {
    imageApi.AddImage(image)
      .then(image => {
        this.setState({
          images: [...this.state.images, image]
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
            onDeleteImage={this.onDeleteImage}
          />
        }
        <AddImage onAddImage={this.onAddImage}></AddImage>
      </div >
    );
  }
}

export default App;