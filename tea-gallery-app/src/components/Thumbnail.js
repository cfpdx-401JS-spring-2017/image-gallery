import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailItem from './ThumbnailItem';

Thumbnail.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function Thumbnail(props) {

  return (
    <div>
      <ThumbnailItem 
      images={props.images}
      onDeleteImage={props.onDeleteImage}
      />
    </div>
  );
}

