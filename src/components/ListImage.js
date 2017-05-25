import React from 'react';
import PropTypes from 'prop-types';

ListImage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default function ListImage({ name, description, url }) {
  return (
    <div>
      <h3><a href={url}>{name}</a></h3>
      <p>{description}</p>
    </div>
  );
}