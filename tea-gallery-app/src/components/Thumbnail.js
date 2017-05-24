import React from 'react';

export default function Thumbnail(props) {

  return (
    <div>
      <ul className="thumbnail-list">
        {props.images.map(image => {
          return <div className="thumbnail-wrapper"> <li className="thumbnail-li" key={image.name}>
            <img className="thumbnail" src={image.url} alt="../img/broken-glass.jpg"></img>
            </li>
          </div>;
        })}
      </ul>
    </div>
  );
}

