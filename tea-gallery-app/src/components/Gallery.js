import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';

Gallery.PropTypes = {
  images: PropTypes.array,
  onDeleteImage: PropTypes.func.required
};

export default function Gallery(props) {
  return (
    <GalleryItem
      images={props.images}
      onDeleteImage={props.onDeleteImage} 
    />
  );
}