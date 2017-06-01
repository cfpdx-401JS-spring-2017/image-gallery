import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Wrapper from '../Wrapper';
import AddImage from '../AddImage';
import pomsAPI from '../../data';
import qs from 'qs';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getAlbum(albumId) {
    pomsAPI.getAlbum(albumId)
      .then(album => this.setState({ album }));
  }

  componentDidMount() {
    const { albumId } = this.props.match.params;
    this.getAlbum(albumId);
  }

  componentWillReceiveProps({ match }) {
    this.getAlbum(match.params.albumId);
  }

  handleAdd(image) {
    pomsAPI.addPom(image)
      .then(image => {
        const updatedAlbum = Object.assign({}, this.state.album);
        updatedAlbum.images = [...this.state.album.images, image];

        this.setState({
          album: updatedAlbum
        });
      });
  }

  handleDelete(id, index) {
    pomsAPI.deletePom(id)
      .then(() => {
        const images = this.state.album.images.slice();
        images.splice(index, 1);
        this.setState({ images });
      });
  }

  render() {
    const { album } = this.state;
    const { location } = this.props;
    const view = qs.parse(location.search.slice(1)).view;

    if (!album) return <div>Loading...</div>;

    return (
      <div>
        <Link to={album._id}><h3>{album.name}</h3></Link>
        <h4>{view}</h4>
        {album &&
          <Wrapper
            history={this.props.history}
            location={this.props.location}
            key={album._id}
            poms={album.images} />}
        <AddImage poms={this.state.poms} onAdd={this.handleAdd} />
      </div>
    );
  }
}

