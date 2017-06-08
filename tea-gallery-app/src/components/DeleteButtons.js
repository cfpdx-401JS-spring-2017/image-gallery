import React from 'react';

export function DeleteImageButton(props) {
  return (
    <button onClick={props.onDeleteImage}>Delete</button>
  );
}

export function DeleteAlbumButton(props) {
  return (
    <button onClick={props.onDeleteAlbum}>Delete album</button>
  );
}