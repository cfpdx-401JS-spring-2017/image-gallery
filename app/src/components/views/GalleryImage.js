import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/GalleryImage.css';

GalleryImage.propTypes = {
  poms: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired
  })
};

export default function GalleryImage({ poms, onDelete }) {
  return (
    <div className="gallery">
      <img src={poms.url} alt={'A pom'} />
      <h2>{poms.name}</h2>
      <p>{poms.description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}