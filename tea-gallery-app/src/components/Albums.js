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

    // this.onAddImage = this.onAddImage.bind(this);
    // this.onDeleteImage = this.onDeleteImage.bind(this);
  }
  componentDidMount() {
    albumApi.get()
      .then(albums => {
        this.setState({
          albums
        });
      });
  }

  // onDeleteImage(id) {
  //   albumApi.deleteImage(id)
  //     .then(() => {
  //       const images = this.state.images;
  //       const index = images.findIndex(img => img._id === id);
  //       images.splice(index, 1);
  //       this.setState({ images });
  //     });
  // }

  // onAddImage(image) {
  //   albumApi.AddImage(image)
  //     .then(image => {
  //       this.setState({
  //         images: [...this.state.images, image]
  //       });
  //     });
  // }

  render() {
    const { match, location } = this.props;
    const { albums } = this.state;
    return (
      <div>
        <div className="albums-view">
          <p>albums</p>
          {albums.map(album =>
            <button
              key={album.name}
              onClick={() => {
                console.log(match);
                this.setState({ album });
              }
              }>
              <Link to="/album/:albumId">{album.name}</Link>
            </button>)}
        </div>
        <Route path={`${match.url}/:albumId`} component={AlbumDetail}></Route> 
        {/*how to pass images as props to album detail?*/}
      </div>
    );
  }
}

export default Albums;
