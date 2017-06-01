import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Route,
  Link,
} from 'react-router-dom';
import albumApi from '../data';
// import AddAlbum from './components/AddAlbum';
import AlbumDetail from './AlbumDetail';

class Albums extends Component {

  // static propTypes = {
  //   images: PropTypes.array,
  // }

  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }
  
  componentDidMount() {
    albumApi.get()
      .then(albums => {
        this.setState({
          albums
        });
      });
  }

  render() {
    const { match } = this.props;
    const { albums } = this.state;
    return (
      <div>
        <div className="albums-view">
          {albums.map(album =>
            <button
              key={album.name}
              onClick={() => this.setState({ album })}
            >
              <Link to={`/albums/${album._id}`}>{album.name}</Link>
            </button>)}
        </div>
        <Route path={`${match.url}/:albumId`} component={AlbumDetail}></Route> 
      </div>
    );
  }
}

export default Albums;
