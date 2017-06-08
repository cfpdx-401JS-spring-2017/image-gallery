import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';

Gallery.propTypes = {
  images: PropTypes.array,
};

export default function Gallery(props) {
  return (
    <GalleryItem
      images={props.images}
    />
  );
}