import React, { Component } from 'react';
import './App.css';
import data from './data/data.js';
import List from './List';
import ThumbNail from './ThumbNail';
import Gallery from './Gallery';
import ImageForm from './ImageForm';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      CurrentView: List,
      images: [],
    }

    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount() {
    data.get()
    .then(images => {
      this.setState({images: images});  
    });
  }

  addImage(image) {
    data.newImageToDb(image)
    .then((savedImage) =>{ 
      let newImages = [
        ...this.state.images,
        savedImage
      ];
      this.setState({images: newImages});
    });
  }

  deleteImage(id) {
    data.removeImage(id)
      .then(() => {
        data.get()
          .then(images => {
            this.setState({ images: images });
          });
      });
  }

  changeView(View = List, data) {
    this.setState({ CurrentView: View, data });
  }

  render() {
    
    const { CurrentView } = this.state;

    return (
      <div className="App">
        <button onClick={() => this.changeView(ThumbNail)}>
          Go to ThumbNail View
        </button>

        <button onClick={() => this.changeView(Gallery)}>
          Go to Gallery View
        </button>

        <button onClick={() => this.changeView(List)}>
          Go to List
        </button>

        <button onClick={() => this.changeView(ImageForm)}>
          Go to Form View
        </button>

        <CurrentView 
          images={this.state.images}
          changeView={this.changeView}
          deleteImage={this.deleteImage}
          addImage={this.addImage}
        />
      </div>  
    );
  }
}

App.PropTypes = {
      CurrentView: PropTypes.instanceOf(List || ThumbNail || Gallery ||ImageForm),
      images: PropTypes.arrayOf(PropTypes.object),
}

export default App;
