import React, { Component } from 'react';
import albumApi from '../services/albumApi';
import Albums from './Albums';

class AlbumsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    this.onAddAlbum = this.onAddAlbum.bind(this);
    this.onDeleteAlbum = this.onDeleteAlbum.bind(this);
  }

  componentDidMount() {
    albumApi.getAll()
      .then(albums => {
        this.setState({
          albums
        });
      });
  }

  onDeleteAlbum(id) {
    albumApi.deleteAlbum(id)
      .then(() => {
        const albums = this.state.albums.slice();
        const index = albums.findIndex(album => album._id === id);
        albums.splice(index, 1);
        this.props.history.push('/albums');
        this.setState({ albums });
      });
  }

  onAddAlbum(album) {
    album.images = [];
    albumApi.addAlbum(album)
      .then(album => {
        this.setState({
          albums: [...this.state.albums, album]
        });
      });
  }

  render() {
    return (
      <Albums
        albums={this.state.albums}
        onAddAlbum={this.onAddAlbum}
        onDeleteAlbum={this.onDeleteAlbum}
      />
    );
  }
}

export default AlbumsContainer;
