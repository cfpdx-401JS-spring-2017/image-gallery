import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailImage from './ThumbnailImage';

Thumbnail.propTypes = {
  poms: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired
  }))
};

export default function Thumbnail({ poms, handleDelete }) {
  return (
    <ul>
      {poms.map((pom, i) => <ThumbnailImage
        key={pom._id}
        {...pom}
        onDelete={() => handleDelete(pom._id, i)}
      />)}
    </ul>
  );
}