import React from 'react';

export default function Thumbnail(props) {

  return (
    <div>
      <ul className="thumbnail-list">
        {props.images.map((image, i) => (
          <div key={i} className="thumbnail-wrapper"> 
            <li className="thumbnail-li">
              <img className="thumbnail" src={image.url} alt="../img/broken-glass.jpg"></img>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

