import React from 'react';
import PropTypes from 'prop-types';

DeleteButton.propTypes = {
  images: PropTypes.array,
};

export default function DeleteButton(props) {
  return (
    <button onClick={props.onDeleteImage}>Delete</button>
  );
}