import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import albumsData from './data/albumsData.js';
import List from './List';
import ThumbNail from './ThumbNail';
import Gallery from './Gallery';
import ImageForm from './ImageForm';

//new
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
    fetch(`/api/albums/full/${id}`)
    .then(album => album.json())
      .then(album => {
        this.setState({
          albumName: album.title,
          albumId: album._id,
          images: album.pictures
        });
      });
  }

  addImage(image) {
    const id = this.props.match.params.id;
    fetch(`/api/pictures/${id}`, 
    {
      method: 'POST',
      body: JSON.stringify(image),
      headers: new Headers({'Content-Type': 'application/json'})
    })
    .then(() => {
      fetch(`/api/albums/full/${id}`)
      .then(album => album.json())
      .then(album => {
        this.setState({
          albumName: album.title,
          albumId: album._id,
          images: album.pictures
        });
      });
    });
  }

  deleteImage(id) {
    const albumId = this.props.match.params.id;
    fetch(`/api/pictures/${id}`, 
    {method: 'DELETE'})
    .then(() => {
      fetch(`/api/albums/full/${albumId}`)
      .then(album => album.json())
      .then(album => {
        this.setState({
          albumName: album.title,
          albumId: album._id,
          images: album.pictures
        });
      });
    })
  }

  render() {
    const {albumName, albumId, images} = this.state;

    return (
      <div className="AlbumsViewer" >
        <button>
          <Link className="Link" to={`/albums/${albumId}/thumbnail`}> Go to ThumbNail View</Link>
        </button>
        <button>
          <Link className="Link" to={`/albums/${albumId}/gallery`}> Go to Gallery View</Link>
        </button>
        <button>
          <Link className="Link" to={`/albums/${albumId}/list`}> Go to List</Link>
        </button>

        <button>
          <Link className="Link" to={`/albums/${albumId}/form`}> Go to Form View </Link>
        </button>

        <Route path="/albums/:id/thumbnail"  render={() => (
          <ThumbNail images={images} deleteImage={this.deleteImage}/>
        )}/>
        <Route path="/albums/:id/gallery"  render={() => (
          <Gallery images={images} deleteImage={this.deleteImage}/>
        )}/>
        <Route path="/albums/:id/list"  render={() => (
          <List images={images} deleteImage={this.deleteImage} />
        )}/>
        <Route path="/albums/:id/form"  render={() => (
          <ImageForm images={images} addImage={this.addImage}/>
        )}/>

      </div>
    );
  }
}

export default AlbumsViewer;