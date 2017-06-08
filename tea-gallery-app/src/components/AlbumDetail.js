import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import AddImage from './AddImage';
import albumApi from '../services/albumApi';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';
import { DeleteAlbumButton } from './DeleteButtons';

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

  onDeleteImage(imageId) {
    albumApi.deleteImage(imageId, this.state.album._id)
      .then(() => {
        const images = this.state.album.images.slice();
        const index = images.findIndex(img => img._id === imageId);
        images.splice(index, 1);
         
        const updatedAlbum = Object.assign({}, this.state.album );
        updatedAlbum.images = [...images];
        this.setState({ album: updatedAlbum });
      });
  }

  onAddImage(image) {
    albumApi.addImage(image, this.state.album._id)
      .then(image => {
        const updatedAlbum = Object.assign({}, this.state.album );
        updatedAlbum.images = [...this.state.album.images, image];

        this.setState({
          album: updatedAlbum
        });
      });
  }

  render() {
    const { match } = this.props;
    if (!this.state.album) return <br/>;
    return (
      <div className="wrapper">
        <div className="view-button-wrapper">
          {views.map(View =>
            <Link key={View.name} to={`${match.url}/${View.name}`}>
              <button key={View.name}>
                {View.name}
              </button>
            </Link>)
          }
        </div>
        <Switch>
          <Route path={`${match.url}/:view`}
            render={(props) => {
              const View = views.find(view => view.name === props.match.params.view);
              return <View
                onDeleteImage={this.onDeleteImage}
                images={this.state.album.images}
              />;
            }}
          />
          <Redirect from={match.url} to={`${match.url}/Thumbnail`} />
        </Switch>
        <DeleteAlbumButton
          album={this.state.album}
          onDeleteAlbum={() => this.props.onDeleteAlbum(this.state.album._id)}
        />
        <AddImage onAddImage={this.onAddImage} />
      </div >
    );
  }
}

export default AlbumDetail;

