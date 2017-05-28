import React, { Component } from 'react';
import './App.css';
import List from './galleries/List';
import Thumbnail from './galleries/Thumbnail';
import Single from './galleries/Single';
import View from './View.js'
import imageData from './images';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

  }

  componentDidMount() {
    imageData.get()
      .then(images => {
        this.setState({ images })
      });
  }


  render() {
    const { images } = this.state;
    return (
        <div>
          <View
            images={images} />
        </div>
  
    );
  }
}
