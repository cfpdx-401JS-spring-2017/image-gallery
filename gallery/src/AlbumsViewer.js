import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import albumsData from './data/albumsData.js';

import List from './List';
import ThumbNail from './ThumbNail';
import Gallery from './Gallery';
import ImageForm from './ImageForm';

class AlbumsViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumName: [],
      albumId: null,
      images: [],
    }
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    albumsData.getAlbumById(id)
      .then(album => {
        this.setState({
          albumName: album.title,
          albumId: album._id,
          images: album.pictures
        });
      });
  }

  addImage(image) {
    albumsData.newImageToDb(image)
      .then((savedImage) => {
        let newImages = [
          ...this.state.images,
          savedImage
        ];
        this.setState({ images: newImages });
      });
  }

  deleteImage(id) {
    albumsData.removeImage(id)
      .then(() => {
        albumsData.get()
          .then(images => {
            this.setState({ images: images });
          });
      });
  }

  render() {
    const {albumName, albumId, images} = this.state;

    return (
      <div className="AlbumsViewer" >
        <button>
          <Link to={`/albums/${albumId}/thumbnail`}> Go to ThumbNail View</Link>
        </button>
        <button>
          <Link to={`/albums/${albumId}/gallery`}> Go to Gallery View</Link>
        </button>
        <button>
          <Link to={`/albums/${albumId}/list`}> Go to List</Link>
        </button>

        <button>
          <Link to={`/albums/${albumId}/form`}> Go to Form View </Link>
        </button>

        <Route path="/albums/:id/thumbnail"  render={() => (
          <ThumbNail images={images} />
        )}/>
        <Route path="/albums/:id/gallery"  render={() => (
          <Gallery images={images} />
        )}/>
        <Route path="/albums/:id/list"  render={() => (
          <List images={images} />
        )}/>
        <Route path="/albums/:id/form"  render={() => (
          <ImageForm images={images} />
        )}/>

      </div>
    );
  }
}

export default AlbumsViewer;