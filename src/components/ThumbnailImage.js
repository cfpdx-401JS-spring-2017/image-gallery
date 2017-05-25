import React from 'react';
import '../styles/ThumbnailImage.css';
// float or inline-block list - show "cards" for each image
// each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).

export default function ThumbnailImage({ name, description, url }) {
  return (
    <div className="thumbnail">
      <img src={url} alt={'A pom'} />
      <h2 className="name">{name}</h2>
    </div>
  );
}