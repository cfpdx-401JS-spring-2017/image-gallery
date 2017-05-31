import React from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

export default function AlbumDetail(props) {
  return (
    <Wrapper
      images={props.images}
      onDeleteImage={props.onDeleteImage} 
    />
  );
}