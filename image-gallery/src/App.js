import React, { Component } from 'react';
import './App.css';
import View from './components/View.js'
import AddImage from './components/AddImage'
import imagesApi from './imagesApi';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

 this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    return (imagesApi.getImages()
      .then((images) => {
        this.setState({ images })
      }))
  }

    handleAdd(image) {
        imagesApi.addImage(image)
            .then(image => {
                this.setState({
                    //adding a new image objet to the imagesApi array
                    images: [...this.state.images, image]
                });
            })
    }


  render() {
    const { images } = this.state;
    if (!images) return <div>Loading Images...</div>;
    return (
      <div>
        <View classname="view-wrapper" images={images} />
       
      
          <div className="control">
            <AddImage handleAdd={this.handleAdd} />

        </div>
      </div>

    );
  }
}

