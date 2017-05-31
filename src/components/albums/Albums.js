import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import AddAlbum from '../AddAlbum';
import AlbumDetail from './AlbumDetail';
import pomsAPI from '../../data';
import qs from 'qs';

function Album({ name, url }) {
  return (
    <li><Link to={url}>{name}</Link></li>
  );
}

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    pomsAPI.get()
      .then(albums => this.setState({ albums }));
  }

  handleAdd(newAlbum) {
    pomsAPI.addPom(newAlbum)
      .then(album => {
        this.setState({
          albums: [...this.state.albums, album]
        });
      });
  }

  handleDelete(id, index) {
    pomsAPI.deletePom(id)
      .then(() => {
        const albums = this.state.albums.slice();
        albums.splice(index, 1);
        this.setState({ albums });
      });
  }

  render() {
    const { albums } = this.state;
    const { match, location } = this.props;
    const view = qs.parse(location.search.slice(1)).view;

    return (
      <main>
        <h2>Albums</h2>
        <h3>{view}</h3>
        <div>
          <ul>
            {albums &&
              albums.map((album, i) => <Album
                key={album._id}
                {...album}
                url={`${match.url}/${album._id}`}
              />)}
          </ul>
          <Route path={`${match.url}/:albumId`} component={AlbumDetail} />
          <AddAlbum poms={this.state.poms} onAdd={this.handleAdd} />
        </div>
      </main>
    );
  }
}

