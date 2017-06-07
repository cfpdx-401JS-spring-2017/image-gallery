import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddAlbum from './AddAlbum';
import AlbumDetail from './AlbumDetail';

export default function Albums(props) {

  const { albums } = props;
  return (
    <div>
      <div className="albums-view">
        <h3>Albums</h3>
        {albums.map(album =>
          <Link key={album.name} to={`/albums/${album._id}`}>
            <button key={album.name}>
              {album.name}
            </button>
          </Link>)}
      </div>
      <Route exact path="/albums"
        render={() => {
          return <AddAlbum onAddAlbum={props.onAddAlbum} />;
        }} />
      <Route path={'/albums/:albumId'}
        render={({ match }) => {
          return <AlbumDetail
            match={match}
            onDeleteAlbum={props.onDeleteAlbum} />;
        }} />
    </div>
  );
}