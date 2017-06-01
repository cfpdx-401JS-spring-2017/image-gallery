import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import AddImage from './AddImage';
import albumApi from '../data';

class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null
    };

    this.onAddImage = this.onAddImage.bind(this);
    this.onDeleteImage = this.onDeleteImage.bind(this);
  }

  getAlbumWrapper(albumId) {
    albumApi.getAlbum(albumId)
      .then(album => this.setState({ album }));
  }

  componentDidMount() {
    const { albumId } = this.props.match.params;
    this.getAlbumWrapper(albumId);
  }

  componentWillReceiveProps({ match }) {
    this.getAlbumWrapper(match.params.albumId);
  }

  onDeleteImage(id) {
    albumApi.deleteImage(id)
      .then(() => {
        const album = this.state.album;
        const index = album.images.findIndex(img => img._id === id);
        album.images.splice(index, 1);
        this.setState({ album });
      });
  }

  onAddImage(image) {
    albumApi.AddImage(image)
      .then(image => {
        const updatedAlbum = Object.assign({}, this.state.album, );
        updatedAlbum.images = [...this.state.album.images, image];

        this.setState({
          album: updatedAlbum
        });
      });
  }

  render() {
    if (!this.state.album) return <div>loading...</div>;
    return (
      <div>
        <Wrapper
          history={this.props.history}
          onDeleteImage={this.onDeleteImage}
          images={this.state.album.images}
        />
        <AddImage onAddImage={this.onAddImage} />
      </div>
    );
  }
}

export default AlbumDetail;

