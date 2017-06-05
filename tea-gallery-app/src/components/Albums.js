import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import albumApi from '../services/albumApi';
import AddAlbum from './AddAlbum';
import AlbumDetail from './AlbumDetail';

class Albums extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      showAddAlbum: true,
      showAddImage: false
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
        const albums = this.state.albums;
        const index = albums.findIndex(album => album._id === id);
        albums.splice(index, 1);
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
    const { match } = this.props;
    const { albums } = this.state;
    return (
      <div>
        <div className="albums-view">
          <h3>Albums</h3>
          {albums.map(album =>
            <Link key={album.name} to={`/albums/${album._id}`}>
              <button
              key={album.name}
                onClick={() => this.setState({ showAdd: false })}
              >
                {album.name}
              </button>
            </Link>)}
          {this.state.showAddAlbum && <AddAlbum onAddAlbum={this.onAddAlbum} />}
        </div>
        <Route path={`${match.url}/:albumId`}
          render={({ match }) => {
            return <AlbumDetail
              match={match}
              onDeleteAlbum={this.onDeleteAlbum} />;
          }} />
      </div>
    );
  }
}

export default Albums;
