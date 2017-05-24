import React from 'react';
// display one image at a time, have left and right arrows to advance/go back
// Display the title, description and the full-size image.

export default function GalleryImage({ poms }) {
  return(
    <div>
      <img src={poms.url} alt={'A pom'} />
      <h2>{poms.name}</h2>
      <p>{poms.description}</p>
    </div>
  );
}