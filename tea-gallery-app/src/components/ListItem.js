import React from 'react';
import PropTypes from 'prop-types';
import { DeleteImageButton } from './DeleteButtons';

ListItem.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function ListItem(props) {

  return (
    <ul>
      {props.images.map((image, i) => (
        <div className="list-item-wrapper" key={i}>
          <li className="image-list-item">Title: {image.title}</li>
          <li className="image-list-item">Description: {image.description}</li>
          <li className="image-list-item"><a href={image.url}>Image</a></li>
          <DeleteImageButton
            images={props.images}
            onDeleteImage={() => props.onDeleteImage(image._id)}
          />
        </div>
      ))}
      {props.images.length < 1 && <h2>Album is empty. Add images below</h2>}
    </ul>
  );
}