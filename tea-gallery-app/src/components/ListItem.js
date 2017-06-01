import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

ListItem.PropTypes = {
  images: PropTypes.array.required,
  onDeleteImage: PropTypes.func.required
};

export default function ListItem(props) {

  return (
    <ul>
      {props.images.map(image => (
        <div className="list-item-wrapper" key={image.title}>
          <li className="image-list-item">Title: {image.title}</li>
          <li className="image-list-item">Description: {image.description}</li>
          <li className="image-list-item"><a href={image.url}>Image</a></li>
          <DeleteButton
            images={props.images}
            onDeleteImage={() => props.onDeleteImage(image._id)}
          />
        </div>
      ))}
      {props.images.length < 1 && <h2>Album is empty. Add images below</h2>}
    </ul>
  );
}