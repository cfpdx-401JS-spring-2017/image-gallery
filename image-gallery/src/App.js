import React, { Component } from 'react';
import './App.css';
import View from './components/View.js'
import imagesApi from './imagesApi';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

 this.handleAdd = this.handleAdd.bind(this);
 this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(id) {
      imagesApi.deleteImage(id)
      .then(() => {
        const images = this.state.images.slice();
        const index = images.findIndex(image => image._id === id);
        images.splice(index, 1);
        this.setState({ images });
      })
    }


  render() {
    const { images } = this.state;
    if (!images) return <div>Loading Images...</div>;
    return (
      <div>
        <View classname="view-wrapper" 
        images={images} 
        onDelete={this.handleDelete}
        handleAdd={this.handleAdd} />
       

      </div>

    );
  }
}

