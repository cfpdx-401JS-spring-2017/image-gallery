import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Wrapper from './Wrapper';
import AddImage from './AddImage';
import albumApi from '../data';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';

const views = [Thumbnail, List, Gallery];

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
    const { match } = this.props;
    if (!this.state.album) return <div>loading...</div>;
    return (
      <div className="wrapper">
        {views.map(View =>
          <button key={View.name}>
            <Link to={`${match.url}/${View.name}`}>{View.name}</Link>
          </button>)
        }
        <AddImage onAddImage={this.onAddImage} />
        <Switch>
          <Route path={`${match.url}/:view`} render={(props) => {
            const View = views.find(view => view.name === props.match.params.view);
            return <View
              onDeleteImage={this.onDeleteImage}
              images={this.state.album.images}
            />;
          }}
          />
          <Redirect from={match.url} to={`${match.url}/Thumbnail`} />
        </Switch>
      </div >
    );
  }
}

export default AlbumDetail;

