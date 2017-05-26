import React from 'react';
import GalleryItem from './GalleryItem';

export default function Gallery(props) {
  return (
    <GalleryItem
      images={props.images}
    />
  );
}