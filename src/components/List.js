import React from 'react';
import ListImage from './ListImage';
// tabular list - show the list vertically
// list item - display the title of the image, the link (not the  actual image), and description.

export default function List({ poms }) {
  return (
    <ul>
      {poms.map((pom, i) => <ListImage key={i} {...pom} /> )}
    </ul>
  );
}