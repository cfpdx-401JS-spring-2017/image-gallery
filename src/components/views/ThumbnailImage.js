import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ThumbnailImage.css';

ThumbnailImage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default function ThumbnailImage({ name, description, url, onDelete }) {
  return (
    <div className="thumbnail">
      <img src={url} alt={'A pom'} />
      <h2 className="name">{name}</h2>
      <button className="delete" onClick={onDelete}>
        Delete🗑
      </button>
    </div>
  );
}