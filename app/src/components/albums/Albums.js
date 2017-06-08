import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import AddAlbum from '../AddAlbum';
import AlbumDetail from './AlbumDetail';
import pomsAPI from '../../services/pomsAPI';

function Album({ name, url, onDelete }) {
  return (
    <div>
      <Link to={url}>{name}</Link>
      <button className="delete" onClick={onDelete}>
        🗑
      </button>
    </div>
  );
}

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
  }

  componentDidMount() {
    pomsAPI.getAll()
      .then(albums => this.setState({ albums }));
  }

  handleAdd(newAlbum) {
    pomsAPI.addAlbum(newAlbum)
      .then(album => {
        this.setState({
          albums: [...this.state.albums, album]
        });
      });
  }

  handleDeleteAlbum(id, index) {
    pomsAPI.deleteAlbum(id)
      .then(() => {
        const albums = this.state.albums.slice();
        albums.splice(index, 1);
        this.setState({ albums });
      });
  }

  render() {
    const { albums } = this.state;
    const { match } = this.props;

    return (
      <main>
        <h2>Albums</h2>
        <Link to={'/'}>Go Home</Link>
        <div>
          <ul>
            {albums &&
              albums.map((album, i) => <Album
                key={album._id}
                {...album}
                url={`${match.url}/${album._id}`}
                onDelete={() => this.handleDeleteAlbum(album._id, i)}
              />)}
          </ul>
          <Route path={`${match.url}/:albumId`} component={AlbumDetail} />
          <AddAlbum poms={this.state.poms} handleAdd={this.handleAdd} />
        </div>
      </main>
    );
  }
}

