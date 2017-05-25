import React from 'react';
import ThumbnailItem from './ThumbnailItem';


export default function Thumbnail(props) {

  return (
    <div>
      <ThumbnailItem images={props.images}/>
    </div>
  );
}

