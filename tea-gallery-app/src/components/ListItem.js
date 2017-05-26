import React from 'react';

export default function ListItem(props) {

  return (
    <ul>
      {props.images.map(image => (
        <div className="list-item-wrapper" key={image.name}>
          <li className="image-list-item">Title: {image.title}</li>
          <li className="image-list-item">Description: {image.description}</li>
          <li className="image-list-item"><a href={image.url}>Image</a></li>
        </div>
      ))}
    </ul>
  );
}