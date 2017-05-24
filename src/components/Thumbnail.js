import React from 'react';
import ThumbnailImage from './ThumbnailImage';
// float or inline-block list - show "cards" for each image
// each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).

export default function Thumbnail({ poms }) {
  return (
    <ul>
      {poms.map((pom, i) => <ThumbnailImage key={i} {...pom} />)}
    </ul>
  );
}