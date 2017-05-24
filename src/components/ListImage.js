import React from 'react';
// tabular list - show the list vertically
// list item - display the title of the image, the link (not the  actual image), and description.

export default function ListImage({ name, description, url }) {
  return (
    <div>
      <h3><a href={url}>{name}</a></h3>
      <p>{description}</p>
    </div>
  );
}