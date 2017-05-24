import React from 'react';
// float or inline-block list - show "cards" for each image
// each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).

export default function ThumbnailImage({ name, description, url }) {
  return (
    <div>
      <img src={url} />
      <h2>{name}</h2>
    </div>
  );
}