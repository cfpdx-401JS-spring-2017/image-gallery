import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailItem from './ThumbnailItem';
import AddImage from './AddImage';

Thumbnail.propTypes = {
  images: PropTypes.array,
};

export default function Thumbnail(props) {

  return (
    <div>
      <ThumbnailItem 
      images={props.images}
      onDeleteImage={props.onDeleteImage}
      />
      <AddImage onSubmit={() => props.onAddImage}></AddImage>
    </div>
  );
}

