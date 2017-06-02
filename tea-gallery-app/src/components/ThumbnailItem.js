import React from 'react';
import PropTypes from 'prop-types';
import { DeleteImageButton } from './DeleteButtons';

ThumbnailItem.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function ThumbnailItem(props) {

  if(!props.images) return <div>No images in this album, add some below</div>;
  return (
    <ul className="thumbnail-list">
      {props.images.map((image, i) => (
        <div key={i} className="thumbnail-wrapper">
          <li className="thumbnail-li">
            <img className="thumbnail" src={image.url} alt="tea"/>
          </li>
          <DeleteImageButton 
          images={props.images}
          onDeleteImage={() => props.onDeleteImage(image._id)}
          />
        {props.images.length < 1 && <h2>Album is empty. Add images below</h2>}
        </div>
      ))}
    </ul>
  );
}