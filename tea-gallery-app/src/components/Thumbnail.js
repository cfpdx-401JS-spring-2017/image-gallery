import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailItem from './ThumbnailItem';

Thumbnail.propTypes = {
  images: PropTypes.array,
};

export default function Thumbnail(props) {

  return (
    <div>
      <ThumbnailItem images={props.images}/>
    </div>
  );
}

