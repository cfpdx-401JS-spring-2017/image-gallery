import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

ThumbnailItem.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function ThumbnailItem(props) {

  return (
    <ul className="thumbnail-list">
      {props.images.map((image, i) => (
        <div key={i} className="thumbnail-wrapper">
          <li className="thumbnail-li">
            <img className="thumbnail" src={image.url} alt="../img/broken-glass.jpg"/>
          </li>
          <DeleteButton 
          images={props.images}
          onDeleteImage={() => props.onDeleteImage(image._id)}
          />
        </div>
      ))}
    </ul>
  );
}